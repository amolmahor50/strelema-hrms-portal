import { motion } from "framer-motion";

export const MotionWrapper = ({
  children,
  type = "fade", // fade, slideUp, slideDown, slideLeft, slideRight, scale, stagger
  delay = 0,
  duration = 0.6,
  className = "",
  repeat = true, // re-animate when scrolled again
  amount = 0.2, // how much should be visible before animation triggers
}) => {
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    stagger: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants[type]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: !repeat, // if false, replays animation every scroll
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};
