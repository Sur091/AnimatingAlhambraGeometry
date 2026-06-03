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
const R = 30.0; // r = 30
const H = (R * Math.sqrt(3)) / 2; // ~25.98

// Hexagonal lattice translation vectors for the Pajarita
const tessellationVectors = [
  { dx: 0, dy: 0 },
  { dx: 0, dy: 4 * H },
  { dx: 0, dy: 8 * H },
  { dx: 0, dy: -4 * H },
  { dx: 0, dy: -8 * H },

  { dx: -3 * R, dy: 2 * H },
  { dx: -3 * R, dy: 6 * H },
  { dx: -3 * R, dy: -2 * H },
  { dx: -3 * R, dy: -6 * H },

  { dx: 3 * R, dy: 2 * H },
  { dx: 3 * R, dy: 6 * H },
  { dx: 3 * R, dy: -2 * H },
  { dx: 3 * R, dy: -6 * H },

  { dx: -6 * R, dy: 0 },
  { dx: -6 * R, dy: 4 * H },
  { dx: -6 * R, dy: 8 * H },
  { dx: -6 * R, dy: -4 * H },
  { dx: -6 * R, dy: -8 * H },

  { dx: 6 * R, dy: 0 },

  { dx: -9 * R, dy: 2 * H },
  { dx: -9 * R, dy: -2 * H },
];

// --- Animation Variants ---
const drawDuration = 1.5;

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

// 3. Rotate the entire plane continuously
const time_before_rotation =
  tessellationVectors.length * 0.3 + drawDuration + 2;
const planeVariants: Variants = {
  rotate3times: {
    rotate: [0, 120, 120, 240, 240, 360],
    transition: {
      delay: time_before_rotation, // Wait for draw & fill
      duration: 12,
      times: [0, 2 / 8, 3 / 8, 5 / 8, 6 / 8, 1],
      ease: "easeInOut",
    },
  },
  rotate6times: {
    rotate: [0, 60, 60, 120, 120, 180, 180, 240, 240, 300, 300, 360],
    transition: {
      delay: time_before_rotation, // Wait for draw & fill
      duration: 12,
      times: [
        0,
        2 / 17,
        3 / 17,
        5 / 17,
        6 / 17,
        8 / 17,
        9 / 17,
        11 / 17,
        12 / 17,
        14 / 17,
        15 / 17,
        1,
      ],
      ease: "easeInOut",
    },
  },
  fadeIn: {
    opacity: [0, 0.3, 0.3, 0],
    transition: {
      duration: 12 + 1,
      times: [0, 1 / 24, 23 / 24, 1],
      delay: time_before_rotation - 0.5,
    },
  },
};

interface PajaritaRotationalSymmetryProps {
  threeFold: boolean;
}

const PajaritaRotationalSymmetry: React.FC<PajaritaRotationalSymmetryProps> = ({
  threeFold,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startAnimation = useInView(containerRef, { threshold: 0.3 });
  const [restartKey, setRestartKey] = useState(0);

  const handleRestart = () => {
    setRestartKey((prev) => prev + 1);
  };

  // The exact SVG path for a single Pajarita
  const pajaritaPath = `
    M 0, 0
    A ${R} ${R} 0 0 1 ${1.5 * R},${(-R * Math.sqrt(3)) / 2}
    A ${R} ${R} 0 0 0 ${3 * R},${-R * Math.sqrt(3)}
    A ${R} ${R} 0 0 1 ${3 * R}, 0
    A ${R} ${R} 0 0 0 ${3 * R}, ${R * Math.sqrt(3)}
    A ${R} ${R} 0 0 1 ${1.5 * R},${(R * Math.sqrt(3)) / 2}
    A ${R} ${R} 0 0 0 0, 0
    Z
  `;

  const rotateNTimes = threeFold ? "rotate3times" : "rotate6times";

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
          {/* The parent group applies the rotation to all children */}
          <motion.g
            style={{ originX: "48.5%", originY: "49.5%" }}
            animate={rotateNTimes}
            variants={planeVariants}
          >
            {tessellationVectors.map((vector, i) => (
              <motion.g key={i} style={{ x: vector.dx, y: vector.dy }}>
                <motion.path
                  d={pajaritaPath}
                  custom={i}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial="hidden"
                  animate={["draw", "fillIn"]}
                  variants={tileVariants}
                />
              </motion.g>
            ))}
            <circle cx="0" cy="0" r="3" fill="rgba(30, 60, 246, 1)" />
          </motion.g>

          <motion.g
            initial="hide"
            animate={["fadeIn"]}
            variants={planeVariants}
          >
            {tessellationVectors.map((vector, i) => (
              <motion.g key={i} style={{ x: vector.dx, y: vector.dy }}>
                <motion.path
                  d={pajaritaPath}
                  stroke="#3b82f6"
                  fill="rgba(59, 130, 246, 0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.g>
            ))}
          </motion.g>
        </svg>
      )}
    </div>
  );
};

export default PajaritaRotationalSymmetry;
