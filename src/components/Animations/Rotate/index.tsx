import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface RotateAnimationProps {
  children: ReactNode;
}

const RotateAnimation: React.FC<RotateAnimationProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ rotate: 90 }}
      animate={isInView ? { rotate: 0 } : {}}
      transition={{ duration: 1, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default RotateAnimation;
