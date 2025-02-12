import backgroundImage from "../assets/logos/cover9.png";
import LenIcon from "../assets/first_section/len.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import { motion } from "framer-motion";
import useScaleAdjustment from "../hooks/useScaleAdjustment";

const FirstSection = () => {
  const scaleClass = useScaleAdjustment(); // Detect scale setting
  return (
    <section
      id="home"
      className={`relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 ${scaleClass}`}
    >
      {/* Background Image - Mobile */}
      <div
        className="absolute inset-0 w-full h-full md:hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Background Image - Desktop */}
      <div
        className="absolute inset-0 w-full h-full hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Card with dynamic top adjustment */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full flex justify-center md:justify-end my-6"
        style={{
          position: scaleClass === "dpr-125" || scaleClass === "dpr-175" ? "relative" : "static",
          top: scaleClass === "dpr-125" ? "-5%" : scaleClass === "dpr-175" ? "10%" : "auto",
        }}
      >
        <Card
          sx={{
            width: { xs: "90%", sm: "75%", md: "50%" },
            maxWidth: 550,
            mx: "auto",
            mr: { md: "8%" },

            // Glassmorphic effect
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.25))",
            backdropFilter: "blur(15px)",
            textAlign: { xs: "center", md: "right" },

            // Shadow & border
            border: "2px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",

            // Rounded corners & padding
            borderRadius: "1rem",
            p: { xs: 2, sm: 3, md: 4 },

            // Dynamic top adjustment
            position: scaleClass === "dpr-125" ? "relative" : "static",
            top: scaleClass === "dpr-125" ? "10%" : "auto",

            // Hover effect
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 12px 30px rgba(255, 255, 255, 0.35)",
            },
          }}
        >
          <CardContent>
            {/* Title */}
            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "1.4rem",
                  sm: "1.6rem",
                  md: "1.8rem",
                  lg: "2rem",
                  xl: "2.2rem",
                },
                fontWeight: "bold",
                mb: 3,
                color: "#F8F9FA",
                textShadow: `
                  0px 0px 10px red, 
                  0px 0px 20px red, 
                  0px 0px 40px red, 
                  0px 0px 80px red
                `,
                textAlign: "center", // Centered for all screens
                whiteSpace: {
                  xs: "normal",
                  sm: "normal",
                  md: "nowrap",
                  lg: "nowrap",
                  xl: "nowrap",
                },
                maxWidth: "100%", // Ensures the title remains within the card
                wordBreak: "break-word", // Allows breaking when necessary
                "@media (max-width: 1050px)": {
                  whiteSpace: "normal", // Wraps the title below 1050px
                },
              }}
            >
              בניית תשתיות ומצלמות אבטחה
            </Typography>

            {/* Paragraph */}
            <Typography
              paragraph
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                fontWeight: "bold",
                color: "#F8F9FA",
                textShadow: `
                  0px 0px 10px red, 
                  0px 0px 20px red, 
                  0px 0px 40px red, 
                  0px 0px 80px red
                `,
                direction: "rtl",
                unicodeBidi: "plaintext", // Fixes punctuation issues in Hebrew
                "@media (max-width: 320px)": {
                  fontSize: "0.9rem",
                },
              }}
            >
              כמעט כל בית עסק מבקש לדאוג לביטחון לקוחותיו ורכושו באמצעות מצלמות
              אבטחה מתקדמות. אנו מספקים פתרון קצה לקצה כולל תשתיות, מחשוב
              ואבטחה.
            </Typography>

            {/* Hebrew bullet list (RTL) with Lens Icon on the Right */}
            <List
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem" },
                fontWeight: "bold",
                color: "#1E3A8A",
                textShadow: "0px 0px 1px purple",
                direction: "rtl",
                unicodeBidi: "plaintext",
                "@media (max-width: 320px)": {
                  fontSize: "0.85rem",
                },
              }}
            >
              {[
                "מצלמות IP מתקדמות",
                "DVR ו-NVR מערכות",
                "פתרונות אנליטיקה למצלמות",
                "צפייה במצלמות מרחוק",
                "התקנה ותחזוקה מקצועית",
                "אינטרקומים וקודנים",
                "בניית תשתיות וארונות תקשורת",
              ].map((text, idx) => (
                <ListItem
                  key={idx}
                  disableGutters
                  sx={{
                    padding: 0,
                    textAlign: "right",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      marginRight: "8px",
                    }}
                  >
                    <img
                      src={LenIcon}
                      alt="Lens icon"
                      style={{ width: 18, height: 18, marginLeft: 6 }}
                    />
                  </ListItemIcon>

                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      sx: { fontSize: "inherit", color: "inherit" },
                      fontWeight: 700,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default FirstSection;
