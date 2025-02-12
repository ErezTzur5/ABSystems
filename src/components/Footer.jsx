import { MapPin, Phone as PhoneIcon, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width to adjust layout for mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scrolling function
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 83, // Adjusting for fixed navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#374151] to-[#1E3A8A] text-gray-300 py-10 px-6 md:px-14">
      <div
        className={`max-w-6xl mx-auto grid gap-10 ${
          isMobile ? "grid-cols-1 text-center" : "md:grid-cols-3 text-right"
        }`}
      >
        {/* Column 1: Logo & Description */}
        <div>
          <h2 className="text-3xl font-extrabold mb-3 text-white">
            A.B Systems
          </h2>
          <p className="text-lg text-gray-300">
            הפתרון המתקדם ביותר לאבטחה, בקרה וניהול חכם של מערכות מתקדמות.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            קישורים שימושיים
          </h3>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => smoothScrollTo("home")}
                className="hover:text-yellow-400 text-yellow-300 text-lg transition"
              >
                בית
              </button>
            </li>
            <li>
              <button
                onClick={() => smoothScrollTo("services")}
                className="hover:text-yellow-400 text-yellow-300 text-lg transition"
              >
                השירותים שלנו
              </button>
            </li>
            <li>
              <button
                onClick={() => smoothScrollTo("contact")}
                className="hover:text-yellow-400 text-yellow-300 text-lg transition"
              >
                צרו קשר
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            תשארו בקשר איתנו
          </h3>

          {/* Address */}
          <div className="flex items-center justify-center md:justify-end text-gray-300 text-lg">
            <span className="ml-3">הכישור 30, חולון</span>
            <MapPin className="w-6 h-6 text-yellow-400 ml-3" />
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center md:justify-end text-gray-300 text-lg mt-3">
            <span className="ml-3">055-2853391</span>
            <PhoneIcon className="w-6 h-6 text-yellow-400 ml-3" />
          </div>

          {/* Email */}
          <div className="flex items-center justify-center md:justify-end text-gray-300 text-lg mt-3">
            <span className="ml-3">A.B.Systems7@gmail.com</span>
            <Mail className="w-6 h-6 text-yellow-400 ml-3" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-600 mt-8 pt-5 text-center text-gray-400 text-lg">
        © {new Date().getFullYear()} A.B Systems. כל הזכויות שמורות.
      </div>
    </footer>
  );
};

export default Footer;
