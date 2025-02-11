import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "../lib/utils";
import logo from "../assets/logos/logo_transperent.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Detect scroll and update navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Smooth scrolling function
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 83,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#eeeeff] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Desktop / Mobile Container */}
        <div className="flex justify-between items-center h-20">
          {/* Left: Phone icon and number */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <a
              href="tel:+9720552853391"
              className={`flex items-center transition-all ${
                isScrolled ? "text-gray-700 hover:text-blue-500" : "text-white"
              }`}
            >
              <Phone size={24} />
              <span className="hidden md:inline text-lg font-medium mx-2">-</span>
              <span className="hidden md:inline text-lg font-medium">055-2853391</span>
            </a>
          </div>

          {/* Middle: Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-right">
            {[
              { label: "צור קשר", id: "contact" },
              { label: "שירותים", id: "services" },
              { label: "בית", id: "home" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => smoothScrollTo(id)}
                className={`transition-all ${
                  isScrolled ? "text-gray-700 hover:text-blue-500" : "text-white hover:text-yellow-400"
                } text-2xl max-lg:text-xl`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="relative flex items-center justify-center cursor-pointer"
          >
            <img src={logo} alt="Logo" className="w-16 h-16 mb-[1.16rem] object-contain absolute" />
            <span
              className={`text-lg mt-[2.32rem] font-bold transition-all ${
                isScrolled ? "text-gray-800" : "text-white"
              } z-10`}
            >
              תקשורת ואחזקה A.B
            </span>
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-2">
            <Button
              ref={buttonRef}
              variant="ghost"
              className={cn(
                `transition-all ${
                  isScrolled ? "bg-[#eeeeff] hover:bg-gray-100 text-black" : "bg-transparent text-white"
                } border-gray-200 shadow-lg`
              )}
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden bg-gray-100 shadow-lg py-2 space-y-2 text-right pr-4">
          <button
            onClick={() => smoothScrollTo("home")}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-right"
          >
            בית
          </button>
          <button
            onClick={() => smoothScrollTo("services")}
            className="border-t-2 block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-right"
          >
            שירותים
          </button>
          <button
            onClick={() => smoothScrollTo("contact")}
            className="border-t-2 block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-right"
          >
            צור קשר
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
