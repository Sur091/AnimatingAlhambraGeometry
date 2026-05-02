import React, { useState, useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";

// --- Scroll Trigger Hook ---
// Triggers the animation only when the component scrolls into view
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

// --- Animation Variants ---
// 1. Sequentially draw grid, then fade out at the very end
const circleDuration = 0.6;
const totalGridTime = 10 * circleDuration;

const gridCircleVariants: Variants = {
  hidden: { pathLength: 0, opacity: 1 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 0.4, // Construction lines stay semi-transparent
    transition: {
      pathLength: { delay: i * circleDuration, duration: 1, ease: "linear" },
      opacity: { delay: i * circleDuration, duration: 0.01 },
    },
  }),
  fade: {
    opacity: 0.05, // Fade to near invisible
    transition: { delay: totalGridTime + 3, duration: 2 }, // Wait for shape to draw, then fade
  },
};

// 2. Wait for grid, then draw the Pajarita shape, then fill it
const pajaritaVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0, fill: "rgba(59, 130, 246, 0)" },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: totalGridTime, duration: 2.5, ease: "easeInOut" },
      opacity: { delay: totalGridTime, duration: 0.01 },
    },
  },
  fillIn: {
    fill: "rgba(59, 130, 246, 0.3)",
    transition: { delay: totalGridTime + 2.5, duration: 1 },
  },
};

// --- Mathematical Grid Setup ---
// R = 50. Height of equilateral triangle = R * sqrt(3)/2 ≈ 43.3
const R = 60.0;
const H = (R / 2) * Math.sqrt(3);

// 10 circles arranged in an inverted triangle (4, 3, 2, 1)
const gridCenters = [
  // Row 1 (Top)
  { cx: -1.5 * R, cy: -H },
  { cx: -R / 2, cy: -H },
  { cx: R / 2, cy: -H },
  { cx: 1.5 * R, cy: -H },
  // Row 2
  { cx: -R, cy: 0 },
  { cx: 0, cy: 0 },
  { cx: R, cy: 0 },
  // Row 3
  { cx: -R / 2, cy: H },
  { cx: R / 2, cy: H },
  // Row 4 (Bottom)
  { cx: 0, cy: H * 2.0 },
];

const Pajarita: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Trigger when 30% of the container is visible
  const startAnimation = useInView(containerRef, { threshold: 0.3 });

  const [restartKey, setRestartKey] = useState(0);

  const handleRestart = () => {
    setRestartKey((prevKey) => prevKey + 1);
  };

  return (
    // Min-height ensures the container exists so IntersectionObserver can see it
    <div
      ref={containerRef}
      onClick={handleRestart}
      style={{
        width: "100%",
        minHeight: "400px",
        display: "flex",
        justifyContent: "center",
      }}
      title="Click to restart animation"
    >
      {startAnimation && (
        <svg
          key={restartKey}
          viewBox="-150 -150 300 300"
          width="100%"
          height="400px"
          style={{ overflow: "visible" }}
        >
          {/* PHASE 1: Draw the underlying compass circles */}
          <g stroke="#64748b" strokeWidth="1" fill="none">
            {gridCenters.map((pt, i) => (
              <motion.circle
                key={i}
                cx={pt.cx}
                cy={pt.cy}
                r={R}
                custom={i}
                initial="hidden"
                animate={["visible", "fade"]} // Draws, then later fades
                variants={gridCircleVariants}
                style={{ originX: "50%", originY: "50%" }}
              />
            ))}
          </g>

          {/* PHASE 2: Trace the 6 arcs of the Pajarita
              This exact path alternates convex and concave arcs (sweep-flag 1 and 0)
              between the intersecting points of the grid. */}
          <motion.path
            d={`
                M -${2 * R}, 0
                A ${R} ${R} 0 0 0 -${R / 2}, -${H}
                A ${R} ${R} 0 0 1 ${R}, -${H * 2}
                A ${R} ${R} 0 0 0 ${R}, 0
                A ${R} ${R} 0 0 1 ${R}, ${H * 2}
                A ${R} ${R} 0 0 0 -${R / 2}, ${H}
                A ${R} ${R} 0 0 1 -${2 * R}, 0
                Z
              `}
            stroke="#3b82f6" // Vibrant blue
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial="hidden"
            animate={["visible", "fillIn"]} // Traces path, then fills color
            variants={pajaritaVariants}
          />
        </svg>
      )}
    </div>
  );
};

export default Pajarita;
