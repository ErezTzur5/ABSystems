import { useEffect, useRef } from "react";
import "./SubmitButton.css"; // Ensure the CSS file is correctly linked

const SubmitButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const handleClick = () => {
      if (button.classList.contains("fly")) return;
      button.classList.add("fly");

      // Reset button state after animation completes
      setTimeout(() => {
        button.classList.remove("fly");
      }, 2250);
    };

    button.addEventListener("click", handleClick);
    
    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <button ref={buttonRef} type="submit" className="plane-send">
      <i className="material-icons" data-content="send">send</i>
    </button>
  );
};

export default SubmitButton;
