import { CSSProperties, useCallback, useEffect, useMemo, useRef } from "react";
import { Container } from "./styles";

type Dot = {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  vx: number;
  vy: number;
};

type DotGridProps = {
  className?: string;
  style?: CSSProperties;
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  friction?: number;
  returnStrength?: number;
};

type Rgb = {
  r: number;
  g: number;
  b: number;
};

function hexToRgb(hex: string): Rgb {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) return { r: 255, g: 255, b: 255 };

  return {
    r: parseInt(match[1], 16),
    g: parseInt(match[2], 16),
    b: parseInt(match[3], 16),
  };
}

function mixColor(base: Rgb, active: Rgb, amount: number) {
  const t = Math.max(0, Math.min(1, amount));
  const r = Math.round(base.r + (active.r - base.r) * t);
  const g = Math.round(base.g + (active.g - base.g) * t);
  const b = Math.round(base.b + (active.b - base.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

export function DotGrid({
  className,
  style,
  dotSize = 3,
  gap = 28,
  baseColor = "#51cbff",
  activeColor = "#ffffff",
  proximity = 140,
  speedTrigger = 900,
  shockRadius = 210,
  shockStrength = 0.08,
  maxSpeed = 3200,
  friction = 0.9,
  returnStrength = 0.08,
}: DotGridProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const sizeRef = useRef({ width: 0, height: 0 });
  const pointerRef = useRef({
    x: 0,
    y: 0,
    active: false,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    vx: 0,
    vy: 0,
    speed: 0,
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const buildGrid = useCallback(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const rect = wrapper.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    sizeRef.current = { width, height };
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const cell = dotSize + gap;
    const cols = Math.max(1, Math.floor((width + gap) / cell));
    const rows = Math.max(1, Math.floor((height + gap) / cell));
    const gridWidth = cols * cell - gap;
    const gridHeight = rows * cell - gap;
    const startX = (width - gridWidth) / 2 + dotSize / 2;
    const startY = (height - gridHeight) / 2 + dotSize / 2;

    const dots: Dot[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({
          cx: startX + col * cell,
          cy: startY + row * cell,
          xOffset: 0,
          yOffset: 0,
          vx: 0,
          vy: 0,
        });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  const pushNearbyDots = useCallback(
    (originX: number, originY: number, radius: number, strength: number) => {
      dotsRef.current.forEach((dot) => {
        const dx = dot.cx - originX;
        const dy = dot.cy - originY;
        const distance = Math.hypot(dx, dy);
        if (distance > radius || distance === 0) return;

        const falloff = 1 - distance / radius;
        dot.vx += dx * strength * falloff;
        dot.vy += dy * strength * falloff;
      });
    },
    []
  );

  useEffect(() => {
    buildGrid();

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const resizeObserver = new ResizeObserver(buildGrid);
    resizeObserver.observe(wrapper);

    return () => resizeObserver.disconnect();
  }, [buildGrid]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handlePointerMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
      const now = performance.now();
      const pointer = pointerRef.current;
      const elapsed = Math.max(16, now - pointer.lastTime);
      const dx = event.clientX - pointer.lastX;
      const dy = event.clientY - pointer.lastY;
      let vx = (dx / elapsed) * 1000;
      let vy = (dy / elapsed) * 1000;
      let speed = Math.hypot(vx, vy);

      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }

      pointer.x = x;
      pointer.y = y;
      pointer.active = isInside;
      pointer.lastX = event.clientX;
      pointer.lastY = event.clientY;
      pointer.lastTime = now;
      pointer.vx = vx;
      pointer.vy = vy;
      pointer.speed = speed;

      if (isInside && speed > speedTrigger) {
        pushNearbyDots(x, y, proximity, shockStrength * 0.18);
      }
    };

    const handleClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
      if (!isInside) return;

      pushNearbyDots(x, y, shockRadius, shockStrength);
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("click", handleClick);
    };
  }, [
    maxSpeed,
    proximity,
    pushNearbyDots,
    shockRadius,
    shockStrength,
    speedTrigger,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let animationFrame = 0;
    const proximitySquared = proximity * proximity;

    const draw = () => {
      const { width, height } = sizeRef.current;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);

      const pointer = pointerRef.current;

      dotsRef.current.forEach((dot) => {
        dot.vx += -dot.xOffset * returnStrength;
        dot.vy += -dot.yOffset * returnStrength;
        dot.vx *= friction;
        dot.vy *= friction;
        dot.xOffset += dot.vx;
        dot.yOffset += dot.vy;

        const x = dot.cx + dot.xOffset;
        const y = dot.cy + dot.yOffset;
        const dx = dot.cx - pointer.x;
        const dy = dot.cy - pointer.y;
        const distanceSquared = dx * dx + dy * dy;
        const colorAmount =
          pointer.active && distanceSquared <= proximitySquared
            ? 1 - Math.sqrt(distanceSquared) / proximity
            : 0;

        context.beginPath();
        context.arc(x, y, dotSize / 2, 0, Math.PI * 2);
        context.fillStyle = mixColor(baseRgb, activeRgb, colorAmount);
        context.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrame);
  }, [activeRgb, baseRgb, dotSize, friction, proximity, returnStrength]);

  return (
    <Container className={className} style={style}>
      <div className="dot-grid__wrap" ref={wrapperRef}>
        <canvas className="dot-grid__canvas" ref={canvasRef} />
      </div>
    </Container>
  );
}
