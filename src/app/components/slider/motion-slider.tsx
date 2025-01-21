"use client";

import React, { useEffect, useState } from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { motion } from "framer-motion";

interface SequentialSliderProps {
  children: React.ReactNode;
  className?: string;
}

const SequentialSlider = React.forwardRef<
  HTMLDivElement,
  SequentialSliderProps
>(({ children }, ref) => {
  const [step, setStep] = useState(0);
  const childrenArray = React.Children.toArray(children);

  const paginate = (newDirection: number) => {
    setStep((prevStep) => {
      const nextStep = prevStep + newDirection;
      // Ensure we stay within bounds
      if (nextStep < 0) return childrenArray.length - 1;
      if (nextStep >= childrenArray.length) return 0;
      return nextStep;
    });
  };
  useEffect(() => {
    setTimeout(() => {
      paginate(1);
    }, 5000);
  });

  return (
    <motion.div
      id="toto"
      custom={step}
      animate={{ x: `-${(100 * step) / childrenArray.length}%` }}
      transition={{
        duration: 1,
      }}
      style={{
        width: `calc(${childrenArray.length} * 100%)`,
      }}
      className="flex"
      ref={ref}
    >
      {childrenArray}

      {/* Navigation buttons */}

      <button
        className="absolute z-50"
        style={{
          top: "calc(50% - 20px)",
          right: "20px",
          height: "40px",
        }}
        onClick={() => paginate(1)}
        aria-label="Next slide"
      >
        <ArrowForwardIosRoundedIcon
          sx={{
            fontSize: 60,
            color: "#000000",
          }}
        />
      </button>
    </motion.div>
  );
});

SequentialSlider.displayName = "SequentialSlider";

export default SequentialSlider;
