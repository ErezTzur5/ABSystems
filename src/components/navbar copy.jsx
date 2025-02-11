import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react"; // Import phone icon
import { cn } from "../lib/utils";
import logo from "../assets/logos/logo_transperent.png"; // Import logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

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

  return (
    <nav className="fixed top-0 right-0 left-0 bg-white shadow-md z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side (Phone Icon & Number) */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <a
              href="tel:+9720552853391"
              className="text-gray-700 hover:text-blue-500 flex items-center"
            >
              <Phone size={24} />
              <span className="hidden md:inline text-lg font-medium mx-2">
                -
              </span>
              <span className="hidden md:inline text-lg font-medium">
                055-2853391
              </span>
            </a>
          </div>
          {/* Logo - Centered with Icon Behind Text */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="relative flex items-center justify-center cursor-pointer"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 mb-[1.16rem] object-contain absolute"
            />
            <span className="text-lg mt-[2.32rem] font-bold text-gray-800 z-10">
              א.ב תקשורת ואחזקה
            </span>
          </a>

          {/* Right Side - Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              ref={buttonRef}
              variant="ghost"
              className={cn(
                "bg-white hover:bg-gray-100 text-black border-gray-200 shadow-lg"
              )}
              size="icon"
              onClick={() => setIsOpen(!isOpen)} // Toggle menu properly
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-right">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-500"
            >
              צור קשר
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-500"
            >
              המלצות
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-500"
            >
              שירותים
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-500"
            >
              אודות
            </a>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-500"
            >
              בית
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Adjusted to be RTL and white background */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white shadow-lg py-2 space-y-2 text-right pr-4"
        >
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            בית
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="border-t-2 block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            אודות
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="border-t-2 block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            שירותים
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="border-t-2 block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            המלצות
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="border-t-2 block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            צור קשר
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
