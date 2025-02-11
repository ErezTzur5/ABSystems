import { useState, useEffect, useRef } from "react";
import {
  FaUniversalAccess, FaFont, FaExpand, FaCompress, FaHighlighter, FaMousePointer,
} from "react-icons/fa";
import {
  MdInvertColors, MdOutlineRemoveRedEye, MdRestartAlt,
} from "react-icons/md";
import { BsFillCursorFill } from "react-icons/bs";
import "./AccessibilityButton.css";

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSettings, setActiveSettings] = useState(new Set());
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // ** Close the menu when clicking outside **
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // ** Toggle accessibility features **
  const toggleSetting = (settingClass) => {
    setActiveSettings((prevSettings) => {
      const updatedSettings = new Set(prevSettings);
      if (updatedSettings.has(settingClass)) {
        updatedSettings.delete(settingClass);
        document.body.classList.remove(settingClass);
      } else {
        updatedSettings.add(settingClass);
        document.body.classList.add(settingClass);
      }
      return updatedSettings;
    });
  };

  // ** Reset all settings **
  const resetAllSettings = () => {
    activeSettings.forEach((setting) => document.body.classList.remove(setting));
    setActiveSettings(new Set());
  };

  return (
    <div className="accessibility-container">
      {/* Toggle button */}
      <button
        ref={buttonRef}
        className={`accessibility-button ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="אפשרויות נגישות"
      >
        <FaUniversalAccess size={24} />
      </button>

      {/* Accessibility menu */}
      <div
        className={`accessibility-menu ${isOpen ? "open" : ""}`}
        ref={menuRef}
      >
        <h3>אפשרויות נגישות</h3>
        <div className="grid-container">
          <button onClick={() => toggleSetting("keyboard-navigation")}>
            ⌨️ ניווט מקלדת
          </button>
          <button onClick={() => toggleSetting("blink-free")}>
            <FaCompress /> ביטול הבהובים
          </button>
          <button onClick={() => toggleSetting("monochrome")}>
            <MdOutlineRemoveRedEye /> מונוכרום
          </button>
          <button onClick={() => toggleSetting("sepia")}>
            <MdOutlineRemoveRedEye /> ספיה
          </button>
          <button onClick={() => toggleSetting("high-contrast")}>
            <FaHighlighter /> ניגודיות גבוהה
          </button>
          <button onClick={() => toggleSetting("black-yellow")}>
            🟡 שחור צהוב
          </button>
          <button onClick={() => toggleSetting("invert-colors")}>
            <MdInvertColors /> היפוך צבעים
          </button>
          <button onClick={() => toggleSetting("highlight-headings")}>
            <FaHighlighter /> הדגשת כותרת
          </button>
          <button onClick={() => toggleSetting("highlight-links")}>
            🔗 הדגשת קישורים
          </button>
          <button onClick={() => toggleSetting("reading-mode")}>
            📖 מצב קריאה
          </button>
          <button onClick={() => toggleSetting("large-cursor")}>
            <BsFillCursorFill /> סמן גדול
          </button>
          <button onClick={() => toggleSetting("black-cursor")}>
            <FaMousePointer /> סמן שחור
          </button>
          <button onClick={() => toggleSetting("increase-font")}>
            <FaFont /> הגדלת גופן
          </button>
          <button onClick={() => toggleSetting("decrease-font")}>
            <FaFont /> הקטנת גופן
          </button>
          <button onClick={() => toggleSetting("enlarge-screen")}>
            <FaExpand /> הגדלת מסך
          </button>
          <button className="reset-button" onClick={resetAllSettings}>
            <MdRestartAlt /> איפוס הגדרות
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityWidget;
