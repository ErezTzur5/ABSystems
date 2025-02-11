import { useRef } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

// Icons/Images:
import CameraIcon from "../assets/cards_logos/camera.png";
import IntercomIcon from "../assets/cards_logos/intercom.png";
import AnalyticsIcon from "../assets/cards_logos/analytics-gif.gif";
import ControlIcon from "../assets/cards_logos/control_room.png";
import EngnieerIcon from "../assets/cards_logos/engineering.png";
import EndtoendIcon from "../assets/cards_logos/endToend.png";
import camera_gif from "../assets/logos/camera_gif.gif";

const cardVariants = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

const SecondSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, amount: 0.3 });

  return (
    <section
      id="services"
      dir="rtl"
      ref={sectionRef}
      // className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-gray-200 to-gray-100"
      className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-[#1E3A8A] to-[#374151]"
      // className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-[#DC2626] to-[#FACC15]"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#F8F9FA",
            textShadow: `
            0px 0px 10px red, 
            0px 0px 20px red, 
            0px 0px 40px red, 
            0px 0px 80px red
          `,
          }} // Bright Yellow
        >
          מגוון פתרונות אבטחה מתקדמים
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#F3F4F6",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" }, // Responsive font sizes
            fontWeight: "bold", // Make it bolder for better visibility
            lineHeight: { xs: "1.5", sm: "1.6", md: "1.8" }, // Improve readability
            textAlign: "center", // Center it for mobile, adjust for desktop if needed
          }}
        >
          אנו מציעים מגוון רחב של פתרונות אבטחה לעסקים, תוך התמקדות בטכנולוגיות
          מתקדמות ומענה הוליסטי לצרכי הלקוח.
        </Typography>

        <div className="flex justify-center">
          <img
            src={camera_gif}
            alt="Camera-rotating"
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>

      {/* 6 Cards Grid */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="start"
        sx={{
          width: "100%",
          maxWidth: "1200px",
          marginX: "auto",
          "& > .MuiGrid-item": {
            "@media (max-width: 600px)": {
              paddingLeft: "0 !important",
            },
          },
        }}
      >
        {/* Cards */}
        {[
          {
            img: CameraIcon,
            title: "מצלמות אבטחה",
            text: "מצלמות IP, מצלמות אלחוטיות (Wireless), מערכות DVR / NVR ואף LPR לזיהוי לוחיות רישוי. מאפשרות ניטור ובקרה רציפה מכל מכשיר וצפייה מרחוק בנייד.",
          },
          {
            img: IntercomIcon,
            title: "אינטרקום ובקרות כניסה",
            text: "התקנת קודנים, בקרות כניסה ואינטרקומים (TADOR), עם אפשרות ל-LPR לחניונים. אנו מציעים פתרונות חכמים ופריסת תשתיות תקשורת לכל מבנה—בתים פרטיים, עסקים ומוסדות.",
          },
          {
            img: AnalyticsIcon,
            title: "פתרונות אנליטיקה",
            text: "ניתוח וידאו חכם (Video Analytics) המעניק תובנות מעמיקות על המתרחש בעסק. מנגנוני זיהוי תנועה וחיישנים מתקדמים מאפשרים אבטחה ובקרה יעילים יותר, וחוסכים עלויות וטעויות אנוש.",
          },
          {
            img: ControlIcon,
            title: "הקמת חדרי בקרה וסניפים",
            text: "הקמת חדרי בקרה וצפייה מתקדמים והקמת ארונות תקשורת, התאמת המערכות לתשתיות הקיימות ודרישות מיוחדות מבטיחה ניהול אופטימלי של האתר.",
          },
          {
            img: EngnieerIcon,
            title: "חשמלאי מוסמך",
            text: "חשמלאי מוסמך ומיומן לעבודות תיקון, התקנה ותחזוקה של מערכות חשמל. התמחות בבתים, משרדים ועסקים, הקפדה על בטיחות ועדכוני תקן, התקנת תאורה לגובה, ושירות אדיב ומקצועי בכל עת.",
          },
          {
            img: EndtoendIcon,
            title: "פתרון קצה לקצה",
            text: "באמצעות גישה מולטי-דיסציפלינרית למחשוב, תשתיות, אבטחה ומולטימדיה, אנו מספקים מענה כולל המנצל באופן אופטימלי את משאבי העסק.",
          },
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card
                sx={{
                  height: { xs: "auto", md: "360px" }, // Adjust height dynamically
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Distributes content evenly
                  padding: { xs: "16px", md: "24px" }, // Adds padding
                  boxShadow: 3,
                  borderRadius: 2,
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 12px 40px rgba(220, 38, 38, 0.8)",
                    animation: "pulseGlow 1s infinite alternate",
                  },
                  "@keyframes pulseGlow": {
                    "0%": { boxShadow: "0 10px 20px rgba(220, 38, 38, 0.6)" },
                    "50%": { boxShadow: "0 15px 35px rgba(220, 38, 38, 0.9)" },
                    "100%": { boxShadow: "0 10px 20px rgba(220, 38, 38, 0.6)" },
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <div className="flex justify-center mb-3">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-[32px] h-[32px]"
                    />
                  </div>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    textAlign="center"
                    
                    sx={{ color: "#DC2626",
                      fontSize: "1.4rem",
                    }} // 🔴 Red accent
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#374151",
                      fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" }, // Adjust font size per screen size
                      fontWeight: "500", // Slightly bolder for readability
                    }}
                  >
                    {card.text}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default SecondSection;
