import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ZoomAnimationProps {
  children: ReactNode;
}

const ZoomAnimation: React.FC<ZoomAnimationProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.75, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomAnimation;
