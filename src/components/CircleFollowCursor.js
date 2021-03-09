import React, { useEffect, useState } from "react";
import { motion,useMotionValue, useSpring  } from "framer-motion";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

export const CircleFollowCursor = () => {
  if (typeof navigator !== "undefined" && isMobile()) return null;

  let cursor = 1;
  let cursorCircle = 1;

  const [mouse, setMouse] = useState({ x: -100, y: -100 }); // mouse pointer's coordinates
  const [pos, setPos] = useState({ x: 0, y: 0 }); // pointer's coordinates
  const [speed, setSpeed] = useState(0.1); // between 0 and 1

  const [scale, setScale] = useState("scale(1)");
  const [rotate, setRotate] = useState("rotate(0deg)");
  const [translate, setTranslate] = useState("translate3d(0)");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);   

  useEffect(() => {
    const moveCursor = (e) => {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
      };
    window.addEventListener("mousemove", moveCursor);

    // cursorCircle = document.querySelector(".cursor__circle");
    // addEventListeners();
    return () => {
        window.removeEventListener("mousemove", moveCursor);
      }
  },[]);

  const addEventListeners = () => {
    window.addEventListener("mousemove", onMouseMove);

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
  };

  const onMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
    updateCursor();
  };

  function getAngle(diffX, diffY) {
    return (Math.atan2(diffY, diffX) * 180) / Math.PI;
  }

  function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
  }

  const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    setScale("scale(" + (1 + squeeze) + ", " + (1 - squeeze) + ")");
    setRotate("rotate(" + angle + "deg)");
    setTranslate("translate3d(" + pos.x + "px ," + pos.y + "px, 0)");
  };

  return (
    <motion.div
      animate={{
        x: pos.x,
        y: pos.y,
        // transform: translate,
      }}
      id="cursor"
    >
      <motion.div
        animate={{ scale: scale, rotate: rotate }}
        className="cursor__circle"
      ></motion.div>
    </motion.div>
  );
};
