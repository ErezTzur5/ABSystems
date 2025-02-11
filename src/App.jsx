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
  return (
    <>
      <div>
        <Navbar />
        <FirstSection/>
        <SectionTransition flip />
        <SecondSection/>
        <SectionTransition />
        <ContactusSection/>
        <SectionTransition/>
        <Footer/>
        <WhatsAppButton />
        <AccessibilityButton />
      </div>
    </>
  );
}

export default App;
