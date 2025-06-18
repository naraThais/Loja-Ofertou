import React from "react";
import { motion } from "framer-motion";

const BackgroundShapes: React.FC = () => {
  return (
    <div className="background-shapes">
      <motion.div
        className="curved-line line1"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="curved-line line2"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="shape shape1"
        animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="shape shape2"
        animate={{ y: [20, -20, 20], rotate: [0, -180, -360] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="shape shape3"
        animate={{ y: [-15, 15, -15], rotate: [0, 180, 360] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};

export default BackgroundShapes;
