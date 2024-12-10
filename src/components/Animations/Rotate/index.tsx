import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RotateAnimationProps {
  children: ReactNode;
}

const RotateAnimation: React.FC<RotateAnimationProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ rotate: 90 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 0.75, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default RotateAnimation;
