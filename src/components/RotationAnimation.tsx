import React, { useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";

// --- Mathematical Setup ---
const R = 50.0;
const H = (3 * R) / 2;
const D = Math.sqrt(3) * R;

// Hexagonal lattice translation vectors for the Pajarita
const tessellationVectors = [
  { dx: -3 * D + 0.5 * D, dy: 0 },
  { dx: -2 * D + 0.5 * D, dy: 0 },
  { dx: -D + 0.5 * D, dy: 0 },
  { dx: 0 + 0.5 * D, dy: 0 },
  { dx: D + 0.5 * D, dy: 0 },
  { dx: 2 * D + 0.5 * D, dy: 0 },

  { dx: -2 * D, dy: -H },
  { dx: -D, dy: -H },
  { dx: 0, dy: -H },
  { dx: D, dy: -H },
  { dx: 2 * D, dy: -H },

  { dx: -2 * D, dy: H },
  { dx: -D, dy: H },
  { dx: 0, dy: H },
  { dx: D, dy: H },
  { dx: 2 * D, dy: H },

  { dx: -2 * D + 0.5 * D, dy: -2 * H },
  { dx: -D + 0.5 * D, dy: -2 * H },
  { dx: 0 + 0.5 * D, dy: -2 * H },
  { dx: D + 0.5 * D, dy: -2 * H },
  { dx: 2 * D + 0.5 * D, dy: -2 * H },

  { dx: 0 + 0.5 * D, dy: 2 * H },
  { dx: -D + 0.5 * D, dy: 2 * H },
  { dx: D + 0.5 * D, dy: 2 * H },
  { dx: 2 * D + 0.5 * D, dy: 2 * H },
  { dx: -2 * D + 0.5 * D, dy: 2 * H },

  { dx: -D, dy: 3 * H },
  { dx: 0, dy: 3 * H },
  { dx: D, dy: 3 * H },

  { dx: -D, dy: -3 * H },
  { dx: 0, dy: -3 * H },
  { dx: D, dy: -3 * H },
];

// --- Animation Variants ---
const drawDuration = 2;

const tileVariants: Variants = {
  hidden: { pathLength: 0, fill: "rgba(59, 130, 246, 0)", opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    transition: {
      opacity: { delay: i * 0.3 - 0.5, duration: 0.1 },
    },
  }),
  hide: { opacity: 0 },
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

// 3. Reflect the entire plane continuously
const timeBeforeReflection =
  tessellationVectors.length * 0.15 + drawDuration + 2;
const planeVariants: Variants = {
  static: { x: 0, y: 0 },
  rotate: {
    rotate: [0, 120],
    transition: {
      delay: timeBeforeReflection, // Wait for draw & fill
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

const start = -Math.PI / 2;
const inc = (2 * Math.PI) / 3;
const triangle_x = (i: number) => R * Math.cos(start + i * inc);
const triangle_y = (i: number) => R * Math.sin(start + i * inc);
const trianglePath = `
  M ${triangle_x(0)}, ${triangle_y(0)}
  L ${triangle_x(1)}, ${triangle_y(1)}
  L ${triangle_x(2)}, ${triangle_y(2)}
  Z
  `;

const RotationAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [restartKey, setRestartKey] = useState(0);

  const handleRestart = () => {
    setRestartKey((prev) => prev + 1);
    setHasStarted(true);
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
      {hasStarted ? (
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
            animate="rotate"
            variants={planeVariants}
            style={{ originX: `${50}%`, originY: `${47.5}%` }}
          >
            {tessellationVectors.map((vector, i) => (
              <motion.path
                key={i}
                d={trianglePath}
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
                d={trianglePath}
                style={{ x: vector.dx, y: vector.dy }}
                stroke="#3b82f6"
                fill="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </motion.g>
          <circle cx={0} cy={-R / 2} r={3} fill="rgba(59, 130, 246, 0.5)" />
        </svg>
      ): (
        <svg
          viewBox="-200 -200 400 400"
          width="100%"
          height="100%" // THE FIX: Fills the square container perfectly
          style={{ overflow: "visible" }}
        >
          <motion.g>
            {tessellationVectors.map((vector, i) => (
              <motion.path
                key={i}
                d={trianglePath}
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

export default RotationAnimation;
