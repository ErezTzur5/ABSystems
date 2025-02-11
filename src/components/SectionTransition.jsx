import { motion } from "framer-motion";

const SectionTransition = ({ flip }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full"
    >
      <svg
        className="w-full h-16 md:h-24"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ transform: flip ? "rotate(180deg)" : "none" }}
      >
        <path
          fill="url(#gradient)" // ✅ Dynamic gradient fill
          fillOpacity="1"
          d="M0,256L120,234.7C240,213,480,171,720,165.3C960,160,1200,192,1320,208L1440,224V320H0Z"
        ></path>

        {/* ✅ Gradient Definition for a Smooth Blend */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#1E3A8A", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#374151", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default SectionTransition;
