import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "../stylesheets/dist/cursor.css";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

export const CircleCursor = () => {
  let cursor;
  let cursorCircle;

  const springConfig = { damping: 50, stiffness: 200 };

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  if (typeof navigator !== "undefined" && isMobile()) return null;

  useEffect(() => {
    cursor = document.querySelector("#cursor");
    cursorCircle = cursor.querySelector(".cursor__circle");
    const cursorModifiers = document.querySelectorAll("[cursor-class]");

    cursorModifiers.forEach((cursorModifier) => {
      cursorModifier.addEventListener("mouseenter", function() {
        const className = this.getAttribute("cursor-class");
        cursor.classList.add(className);
      });

      cursorModifier.addEventListener("mouseleave", function() {
        const className = this.getAttribute("cursor-class");
        cursor.classList.remove(className);
      });
    });
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    //requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      id="cursor"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring
      }}
    >
      <motion.div
        className="cursor__circle"
      ></motion.div>
    </motion.div>
  );
};
