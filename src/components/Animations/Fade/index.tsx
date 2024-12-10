import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FadeAnimationProps {
  children: ReactNode;
}

const FadeAnimation: React.FC<FadeAnimationProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimation;
