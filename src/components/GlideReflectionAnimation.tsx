import React, { useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";

// --- Scroll Trigger Hook ---
// function useInView<T extends Element>(
//   ref: React.RefObject<T | null>,
//   options = {},
// ) {
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     if (!ref.current) return;
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setInView(true);
//         observer.unobserve(entry.target);
//       }
//     }, options);

//     observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [ref, options]);

//   return inView;
// }

// --- Mathematical Setup ---
const R = 40.0;
const H = 2 * R * Math.SQRT1_2;
const D = 4 * R * Math.SQRT1_2;

// Hexagonal lattice translation vectors for the Pajarita
const tessellationVectors = [
  { dx: -5 * D, dy: 0 },
  { dx: -4 * D + 0.5 * D, dy: 0 },
  { dx: -3 * D + 0.5 * D, dy: 0 },
  { dx: -2 * D + 0.5 * D, dy: 0 },
  { dx: -D + 0.5 * D, dy: 0 },
  { dx: 0 + 0.5 * D, dy: 0 },
  { dx: D + 0.5 * D, dy: 0 },
  { dx: 2 * D + 0.5 * D, dy: 0 },
  { dx: 3 * D + 0.5 * D, dy: 0 },
  { dx: 4 * D + 0.5 * D, dy: 0 },

  { dx: -2 * D, dy: -H },
  { dx: -D, dy: -H },
  { dx: 0, dy: -H },
  { dx: D, dy: -H },
  { dx: 2 * D, dy: -H },
  // { dx: 3 * D, dy: -H },

  // { dx: -3 * D, dy: H },
  { dx: -2 * D, dy: H },
  { dx: -D, dy: H },
  { dx: 0, dy: H },
  { dx: D, dy: H },
  { dx: 2 * D, dy: H },

  { dx: -3 * D + 0.5 * D, dy: -2 * H },
  { dx: -2 * D + 0.5 * D, dy: -2 * H },
  { dx: -D + 0.5 * D, dy: -2 * H },
  { dx: 0 + 0.5 * D, dy: -2 * H },
  { dx: D + 0.5 * D, dy: -2 * H },
  { dx: 2 * D + 0.5 * D, dy: -2 * H },

  { dx: -4 * D + 0.5 * D, dy: 2 * H },
  { dx: -3 * D + 0.5 * D, dy: 2 * H },
  { dx: -2 * D + 0.5 * D, dy: 2 * H },
  { dx: -D + 0.5 * D, dy: 2 * H },
  { dx: 0 + 0.5 * D, dy: 2 * H },
  { dx: D + 0.5 * D, dy: 2 * H },
  { dx: 2 * D + 0.5 * D, dy: 2 * H },

  { dx: -2 * D, dy: 3 * H },
  { dx: -D, dy: 3 * H },
  { dx: 0, dy: 3 * H },
  { dx: D, dy: 3 * H },
  { dx: 2 * D, dy: 3 * H },

  { dx: -2 * D, dy: -3 * H },
  { dx: -D, dy: -3 * H },
  { dx: 0, dy: -3 * H },
  { dx: D, dy: -3 * H },
  { dx: 2 * D, dy: -3 * H },
  { dx: 3 * D, dy: -3 * H },

  { dx: -2 * D + 0.5 * D, dy: 4 * H },
  { dx: -D + 0.5 * D, dy: 4 * H },
  { dx: 0 + 0.5 * D, dy: 4 * H },
  { dx: D + 0.5 * D, dy: 4 * H },
  { dx: 2 * D + 0.5 * D, dy: 4 * H },

  { dx: -D, dy: 5 * H },
  { dx: 0, dy: 5 * H },
  { dx: D, dy: 5 * H },
  { dx: 2 * D, dy: 5 * H },
  { dx: 3 * D, dy: 5 * H },
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
const timeBeforeGlideReflection =
  tessellationVectors.length * 0.25 + drawDuration + 3;
const planeVariants: Variants = {
  static: { x: 0, y: 0 },
  reflect: {
    scaleX: -1,
    transition: {
      delay: timeBeforeGlideReflection, // Wait for draw & fill
      duration: 3,
      ease: "easeInOut",
    },
  },
  translate: {
    y: [0, -H],
    transition: {
      delay: timeBeforeGlideReflection, // Wait for draw & fill
      duration: 3,
      ease: "easeInOut",
    },
  },
  fadeIn: {
    opacity: [0, 0.3, 0.3, 0],
    transition: {
      duration: 3 + 1,
      times: [0, 0.5 / 4, 3.5 / 4, 1],
      delay: timeBeforeGlideReflection,
    },
  },
};

const GlideReflectionAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [restartKey, setRestartKey] = useState(0);

  const handleRestart = () => {
    setRestartKey((prev) => prev + 1);
    setHasStarted(true);
  };

  // The exact SVG path for a single airplane
  const start = -Math.PI / 4;
  const inc = Math.PI / 2;
  const rectangle_x = (t: number) => 2 * R * Math.cos(start + t * inc) + D / 4;
  const rectangle_y = (t: number) => R * Math.sin(start + t * inc);

  const rectanglePath = `
    M ${rectangle_x(0)}, ${rectangle_y(0)}
    L ${rectangle_x(1)}, ${rectangle_y(1)}
    L ${rectangle_x(2)}, ${rectangle_y(2)}
    L ${rectangle_x(3)}, ${rectangle_y(3)}
    Z
  `;

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
            animate={["reflect", "translate"]}
            variants={planeVariants}
          >
            {tessellationVectors.map((vector, i) => (
              <motion.path
                key={i}
                d={rectanglePath}
                custom={i}
                style={{ x: vector.dx, y: vector.dy }}
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial="hidden"
                animate={i != 0 ? ["draw", "fillIn"] : ""}
                variants={tileVariants}
              />
            ))}
          </motion.g>
          <motion.g initial="hide" animate="fadeIn" variants={planeVariants}>
            {tessellationVectors.map((vector, i) => (
              <motion.path
                key={i}
                d={rectanglePath}
                style={{ x: vector.dx, y: vector.dy }}
                stroke="#3b42ff"
                fill="rgba(59, 130, 246, 0.0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </motion.g>
          {/*Line of Reflection*/}
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
      ) : (
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
                d={rectanglePath}
                style={{ x: vector.dx, y: vector.dy }}
                stroke="#3b42ff"
                fill="rgba(59, 130, 246, 0.0)"
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

export default GlideReflectionAnimation;
