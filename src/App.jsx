import { useEffect } from "react";
import "./index.css";
import Navbar from "./components/navbar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ContactusSection from "./components/ContactUs";
import Footer from "./components/Footer";
import SectionTransition from "./components/SectionTransition";
import WhatsAppButton from "./components/WhatsAppButton";
import AccessibilityButton from "./components/ui/AccessibilityButton";

function App() {
  useEffect(() => {
    const adjustZoomBasedOnScale = () => {
      const dpr = window.devicePixelRatio || 1; // Get device pixel ratio
      const isMobile =
        /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) ||
        window.innerWidth < 768;

      // Skip scaling adjustments on mobile devices AND if system scale is 100%
      if (isMobile || dpr === 1) return;

      // Mapping scale values to corresponding zoom levels
      let zoomLevel = "100%"; // Default for 100% scaling

      if (dpr >= 2.00) {
        zoomLevel = "50%"; // 200% scale -> Zoom out to 50%
      } else if (dpr >= 1.75) {
        zoomLevel = "57%"; // 175% scale -> Zoom out to 57%
      } else if (dpr >= 1.50) {
        zoomLevel = "67%"; // 150% scale -> Zoom out to 67%
      } else if (dpr >= 1.25) {
        zoomLevel = "80%"; // 125% scale -> Zoom out to 80%
      } else if (dpr <= 0.80) {
        zoomLevel = "120%"; // 80% scale -> Zoom in to 120%
      }

      document.body.style.zoom = zoomLevel;
      console.log(`Applying zoom level: ${zoomLevel} (DPR: ${dpr})`);
    };

    adjustZoomBasedOnScale(); // Run on initial load

    // Reapply when the window resizes (handles external monitor changes)
    window.addEventListener("resize", adjustZoomBasedOnScale);
    return () => window.removeEventListener("resize", adjustZoomBasedOnScale);
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <FirstSection />
        <SectionTransition flip />
        <SecondSection />
        <SectionTransition />
        <ContactusSection />
        <SectionTransition />
        <Footer />
        <WhatsAppButton />
        <AccessibilityButton />
      </div>
    </>
  );
}

export default App;
