import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeAnimationProps {
  children: ReactNode;
}

const FadeAnimation: React.FC<FadeAnimationProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimation;
