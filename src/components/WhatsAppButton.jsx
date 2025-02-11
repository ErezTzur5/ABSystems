import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "0552853391";

  return (
    <a
      href={`https://wa.me/972${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className=" z-10 fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      style={{ width: "70px", height: "70px" }}
    >
      <FaWhatsapp size={45} />
    </a>
  );
};

export default WhatsAppButton;
