import React, { useState, useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";

// --- Scroll Trigger Hook ---
function useInView<T extends Element>(
  ref: React.RefObject<T | null>,
  options = {},
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
}

// --- Mathematical Setup ---
const R = 50.0;
const D = R * Math.SQRT1_2;

// Hexagonal lattice translation vectors for the Pajarita
const tessellationVectors = [
  // { dx: 0, dy: -6 * R },
  { dx: 0, dy: -4 * D },
  { dx: 0, dy: -8 * D },
  { dx: 0, dy: 0 },
  { dx: 0, dy: 4 * D },
  { dx: 0, dy: 8 * D },

  { dx: -2 * D, dy: -6 * D },
  { dx: -2 * D, dy: -2 * D },
  { dx: -2 * D, dy: 2 * D },
  { dx: -2 * D, dy: 6 * D },
  { dx: -2 * D, dy: 10 * D },

  { dx: 2 * D, dy: -6 * D },
  { dx: 2 * D, dy: -2 * D },
  { dx: 2 * D, dy: 2 * D },
  { dx: 2 * D, dy: 6 * D },
  { dx: 2 * D, dy: 10 * D },

  { dx: 4 * D, dy: -8 * D },
  { dx: 4 * D, dy: -4 * D },
  { dx: 4 * D, dy: 0 },
  { dx: 4 * D, dy: 4 * D },
  { dx: 4 * D, dy: 8 * D },

  { dx: -4 * D, dy: -8 * D },
  { dx: -4 * D, dy: -4 * D },
  { dx: -4 * D, dy: 0 },
  { dx: -4 * D, dy: 4 * D },
  { dx: -4 * D, dy: 8 * D },

  { dx: -6 * D, dy: -6 * D },
  { dx: -6 * D, dy: -2 * D },
  { dx: -6 * D, dy: 2 * D },
  { dx: -6 * D, dy: 6 * D },
  { dx: -6 * D, dy: 10 * D },

  { dx: 6 * D, dy: -6 * D },
  { dx: 6 * D, dy: -2 * D },
  { dx: 6 * D, dy: 2 * D },
  { dx: 6 * D, dy: 6 * D },
  { dx: 6 * D, dy: 10 * D },

  { dx: -8 * D, dy: -8 * D },
  { dx: -8 * D, dy: -4 * D },
  { dx: -8 * D, dy: 0 },
  { dx: -8 * D, dy: 4 * D },
  { dx: -8 * D, dy: 8 * D },
];

// --- Animation Variants ---
const drawDuration = 2;

const tileVariants: Variants = {
  hidden: { pathLength: 0, fill: "rgba(59, 130, 246, 0)", opacity: 0 },
  // 1. Draw the outlines sequentially
  draw: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.3, duration: drawDuration, ease: "easeInOut" },
      opacity: { delay: i * 0.3, duration: 0.1 },
    },
  }),
  // 2. Fill the colors after drawing
  fillIn: () => ({
    fill: "rgba(59, 130, 246, 0.4)",
    transition: {
      delay: tessellationVectors.length * 0.3,
      duration: 1,
    },
  }),
};

// 3. Translate the entire plane continuously
const time_before_translation =
  tessellationVectors.length * 0.15 + drawDuration + 2;
const planeVariants: Variants = {
  static: { x: 0, y: 0 },
  translate: {
    x: [0, 2 * D],
    y: [0, -2 * D],
    transition: {
      delay: time_before_translation, // Wait for draw & fill
      duration: 3,
      ease: "easeInOut",
    },
  },
  fadeIn: {
    opacity: [0, 0.3, 0.3, 0],
    transition: {
      duration: 3 + 1,
      times: [0, 0.5 / 4, 3.5 / 4, 1],
      delay: time_before_translation - 0.5,
    },
  },
};

const TranslationAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startAnimation = useInView(containerRef, { threshold: 0.3 });
  const [restartKey, setRestartKey] = useState(0);

  const handleRestart = () => {
    setRestartKey((prev) => prev + 1);
  };

  // The exact SVG path for a single airplane
  const start = -Math.PI / 4;
  const inc = Math.PI / 2;

  const squarePath = (initial: number) => {
    const square_x = (t: number) => R * Math.cos(initial + t * inc);
    const square_y = (t: number) => R * Math.sin(initial + t * inc);
    return `
    M ${square_x(0)}, ${square_y(0)}
    L ${square_x(1)}, ${square_y(1)}
    L ${square_x(2)}, ${square_y(2)}
    L ${square_x(3)}, ${square_y(3)}
    Z
  `;
  };

  return (
    <div
      ref={containerRef}
      onClick={handleRestart}
      style={{
        width: "100%",
        minHeight: "400px",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "50%",
      }}
      title="Click to restart animation"
    >
      {startAnimation && (
        <svg
          key={restartKey}
          viewBox="-200 -200 400 400"
          width="100%"
          height="100%" // THE FIX: Fills the square container perfectly
          style={{ overflow: "visible" }}
        >
          {/* The parent group applies the infinite translation to all children */}
          <motion.g
            initial="static"
            animate="translate"
            variants={planeVariants}
          >
            {tessellationVectors.map((vector, i) => (
              <motion.path
                key={i}
                d={squarePath(start + (i % 2) * Math.PI)}
                custom={i}
                style={{ x: vector.dx, y: vector.dy }}
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial="hidden"
                animate={["draw", "fillIn"]}
                variants={tileVariants}
              />
            ))}
          </motion.g>
          <motion.g initial="hide" animate="fadeIn" variants={planeVariants}>
            {tessellationVectors.map((vector, i) => (
              <motion.path
                key={i}
                d={squarePath(start + (i % 2) * Math.PI)}
                style={{ x: vector.dx, y: vector.dy }}
                stroke="#3b82f6"
                fill="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </motion.g>
        </svg>
      )}
    </div>
  );
};

export default TranslationAnimation;
