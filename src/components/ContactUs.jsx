import { useRef } from "react";
import { MapPin, Phone as PhoneIcon, Mail } from "lucide-react";
import { Card, CardContent } from "@mui/material";
import emailjs from "emailjs-com";
import { motion, useInView } from "framer-motion";
import SubmitButton from "./ui/SubmitButton";

const ContactUs = () => {
  const formRef = useRef();
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { triggerOnce: false, amount: 0.3 });

  const serviceId = "service_rvbviyc";
  const templateId = "template_ucre3ic";
  const publicKey = "03VOwaB0_14J6eTWq";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        console.log("SUCCESS:", result.text);
        alert("טופס נשלח בהצלחה!");
        e.target.reset();
      },
      (error) => {
        console.error("ERROR:", error.text);
        alert("אירעה שגיאה בשליחת הטופס. אנא נסו שנית מאוחר יותר.");
      }
    );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      dir="rtl"
      className="w-full pb-10 px-4 md:px-8 bg-gradient-to-b shadow-lg from-[#374151] to-[#1E3A8A]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 1 }}
          className="overflow-hidden text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 pt-3 text-gray-100">
            צרו קשר
          </h2>
          <p className="text-gray-300">
            נשמח לשמוע מכם - מלאו את הטופס או השתמשו בפרטי ההתקשרות להלן.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col md:flex-row-reverse gap-8 mt-6 md:border md:border-yellow-400 md:p-6 md:rounded-xl md:bg-opacity-10 md:bg-white"
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:w-1/2 content-center justify-items-center border border-yellow-400 p-6 rounded-xl bg-opacity-10 bg-white"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-100 text-center md:text-right">
              תשארו בקשר איתנו
            </h3>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="flex items-center text-gray-300 text-lg">
                <MapPin className="w-5 h-5 text-yellow-400 ml-2" />
                <span>הכישור 30, חולון</span>
              </div>
              <div className="flex items-center text-gray-300 text-lg">
                <PhoneIcon className="w-5 h-5 text-yellow-400 ml-2" />
                <span>055-2853391</span>
              </div>
              <div className="flex items-center text-gray-300 text-lg">
                <Mail className="w-5 h-5 text-yellow-400 ml-2" />
                <span>A.B.Systems7@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:w-1/2"
          >
            <Card
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)",
                borderRadius: "15px",
                padding: "20px",
                border: "1px solid #dcca26",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 24px rgba(255, 255, 255, 0.3)",
                },
              }}
            >
              <CardContent>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  {/* Full Name */}
                  <label className="block font-semibold mb-1 text-gray-100 text-lg">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="הקלידו את שמכם המלא"
                    className="w-full px-3 py-2 border border-yellow-400 bg-white text-black rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-yellow-400"
                    required
                  />

                  {/* Phone */}
                  <label className="block font-semibold mb-1 text-gray-100 text-lg">
                    טלפון ליצירת קשר
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="הקלידו את מספר הטלפון שלכם"
                    className="w-full px-3 py-2 border border-yellow-400 bg-white text-black rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 text-right"
                    dir="rtl"
                    required
                  />

                  {/* Email */}
                  <label className="block font-semibold mb-1 text-gray-100 text-lg">
                    אימייל
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="הקלידו את כתובת האימייל שלכם"
                    className="w-full px-3 py-2 border border-yellow-400 bg-white text-black rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-yellow-400"
                    required
                  />

                  {/* Message */}
                  <label className="block font-semibold mb-1 text-gray-100 text-lg">
                    הודעה
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="ספרו לנו על מה תרצו לקבל מידע"
                    className="w-full px-3 py-2 border border-yellow-400 bg-white text-black rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-yellow-400"
                    required
                  ></textarea>

                  {/* Submit */}
                  <div className="text-center">
                    <SubmitButton />
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
