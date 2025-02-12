import { useEffect, useState } from "react";

const useScaleAdjustment = () => {
  const [scaleClass, setScaleClass] = useState("");

  useEffect(() => {
    const dpr = window.devicePixelRatio || 1; // Get device pixel ratio
    let newClass = "";

    if (dpr >= 2.0) {
      newClass = "dpr-200"; // Assign class for 200% scaling
    } else if (dpr >= 1.75) {
      newClass = "dpr-175"; // Assign class for 175% scaling
    } else if (dpr >= 1.5) {
      newClass = "dpr-150"; // Assign class for 150% scaling
    } else if (dpr >= 1.25) {
      newClass = "dpr-125"; // Assign class for 125% scaling
    } else if (dpr <= 0.8) {
      newClass = "dpr-80"; // Assign class for 80% scaling
    }

    setScaleClass(newClass);
  }, []); // Runs only once when the component mounts

  return scaleClass;
};

export default useScaleAdjustment;
