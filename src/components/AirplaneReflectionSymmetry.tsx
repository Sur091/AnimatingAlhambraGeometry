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

// Hexagonal lattice translation vectors for the Pajarita
const tessellationVectors = [
  // { dx: 0, dy: -6 * R },
  { dx: 0, dy: -4 * R },
  { dx: 0, dy: -2 * R },
  { dx: 0, dy: 0 },
  { dx: 0, dy: 2 * R },
  { dx: 0, dy: 4 * R },
  { dx: 0, dy: 6 * R },

  { dx: 2 * R, dy: 6 * R },
  { dx: 2 * R, dy: 4 * R },
  { dx: 2 * R, dy: 2 * R },
  { dx: 2 * R, dy: 0 },
  { dx: 2 * R, dy: -2 * R },
  { dx: 2 * R, dy: -4 * R },

  { dx: -2 * R, dy: -6 * R },
  { dx: -2 * R, dy: -4 * R },
  { dx: -2 * R, dy: -2 * R },
  { dx: -2 * R, dy: 0 },
  { dx: -2 * R, dy: 2 * R },
  { dx: -2 * R, dy: 4 * R },
  { dx: -2 * R, dy: 6 * R },

  { dx: -4 * R, dy: 6 * R },
  { dx: -4 * R, dy: 4 * R },
  { dx: -4 * R, dy: 2 * R },
  { dx: -4 * R, dy: 0 },
  { dx: -4 * R, dy: -2 * R },
  { dx: -4 * R, dy: -4 * R },
  { dx: -4 * R, dy: -6 * R },

  { dx: 4 * R, dy: 4 * R },
  { dx: 4 * R, dy: 2 * R },
  { dx: 4 * R, dy: 0 },
  { dx: 4 * R, dy: -2 * R },
  { dx: 4 * R, dy: -4 * R },
  { dx: 4 * R, dy: -6 * R },

  // { dx: 6 * R, dy: 4 * R },
  // { dx: 6 * R, dy: 2 * R },
  // { dx: 6 * R, dy: 0 },
  // { dx: 6 * R, dy: -2 * R },
  // { dx: 6 * R, dy: -4 * R },
  // { dx: 6 * R, dy: -6 * R },

  // { dx: -6 * R, dy: -6 * R },
  // { dx: -6 * R, dy: -4 * R },
  // { dx: -6 * R, dy: -2 * R },
  // { dx: -6 * R, dy: 0 },
  // { dx: -6 * R, dy: 2 * R },
  // { dx: -6 * R, dy: 4 * R },
  // { dx: -6 * R, dy: 6 * R },
];

// --- Animation Variants ---
const drawDuration = 2;

const tileVariants: Variants = {
  hidden: { pathLength: 0, fill: "rgba(59, 130, 246, 0)", opacity: 0 },
  // 1. Draw the outlines sequentially
  show: (i: number) => ({
    opacity: 1,
    transition: {
      opacity: { delay: i * 0.3, duration: 0.1 },
    },
  }),
  hide: { opacity: 0 },
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
const timeBeforeReflection =
  tessellationVectors.length * 0.3 + drawDuration + 2;
const planeVariants: Variants = {
  static: { x: 0, y: 0 },
  scale: {
    scaleX: -1,
    transition: {
      delay: timeBeforeReflection,
      duration: 3,
      ease: "easeInOut",
    },
  },
  fadeIn: {
    opacity: [0, 0.3, 0.3, 0],
    transition: {
      duration: 3 + 1,
      times: [0, 0.5 / 4, 3.5 / 4, 1],
      delay: timeBeforeReflection - 0.5,
    },
  },
};

const AirplaneReflectionSymmetry: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startAnimation = useInView(containerRef, { threshold: 0.3 });
  const [restartKey, setRestartKey] = useState(0);

  const handleRestart = () => {
    setRestartKey((prev) => prev + 1);
  };

  // The exact SVG path for a single airplane
  const start = -Math.PI / 4;
  const inc = Math.PI / 4;

  const airplanePath = (initial: number) => {
    const octagon_x = (t: number) => R * Math.cos(initial + t * inc);
    const octagon_y = (t: number) => R * Math.sin(initial + t * inc);
    return `
    M ${-Math.SQRT1_2 * octagon_x(6) + (1 + Math.SQRT1_2) * octagon_x(5)},  ${-Math.SQRT1_2 * octagon_y(6) + (1 + Math.SQRT1_2) * octagon_y(5)}
    L ${octagon_x(3)}, ${octagon_y(3)}
    L ${-Math.SQRT1_2 * octagon_x(0) + (1 + Math.SQRT1_2) * octagon_x(1)},  ${-Math.SQRT1_2 * octagon_y(0) + (1 + Math.SQRT1_2) * octagon_y(1)}
    L ${octagon_x(1)}, ${octagon_y(1)}
    L ${(1 - Math.SQRT1_2) * octagon_x(7) + Math.SQRT1_2 * octagon_x(2)},  ${(1 - Math.SQRT1_2) * octagon_y(7) + Math.SQRT1_2 * octagon_y(2)}
    L ${octagon_x(7)}, ${octagon_y(7)}
    L ${(1 - Math.SQRT1_2) * octagon_x(2) + Math.SQRT1_2 * octagon_x(5)},  ${(1 - Math.SQRT1_2) * octagon_y(2) + Math.SQRT1_2 * octagon_y(5)}
    L ${octagon_x(5)}, ${octagon_y(5)}
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
            animate={["scale"]}
            variants={planeVariants}
          >
            {tessellationVectors.map((vector, i) => (
              <motion.path
                key={i}
                d={airplanePath(start + (i % 2) * Math.PI)}
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
                d={airplanePath(start + (i % 2) * Math.PI)}
                style={{ x: vector.dx, y: vector.dy }}
                stroke="#3b82f6"
                fill="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </motion.g>
          <motion.path
            d={`M ${0} -250 L ${0} 250`} // Your SVG Path
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="10 10" // 4px dash, 4px gap
            initial="hide"
            custom={tessellationVectors.length}
            animate="show"
            variants={tileVariants}
          />
        </svg>
      )}
    </div>
  );
};

export default AirplaneReflectionSymmetry;
