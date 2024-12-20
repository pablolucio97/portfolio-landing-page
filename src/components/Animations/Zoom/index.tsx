import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ZoomAnimationProps {
  children: ReactNode;
}

const ZoomAnimation: React.FC<ZoomAnimationProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : {}}
      transition={{ duration: 0.25, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomAnimation;
