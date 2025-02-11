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

const FirstSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center px-4 md:px-8"
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

      {/* Card Positioned on the Right in Desktop Mode */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full flex justify-center md:justify-end my-4"
      >
        <Card
          sx={{
            width: { xs: "95%", sm: "70%", md: "50%" }, // Adjusted for better spacing
            maxWidth: 600, // Ensures content fits
            mx: "auto",
            mr: { md: "8%" }, // Moves the card slightly left in desktop mode

            // Glassmorphic effect
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.25))",
            backdropFilter: "blur(15px)",
            textAlign: { xs: "center", md: "right" }, // Centered for mobile, right-aligned for desktop

            // Enhanced shadow and border for visibility
            border: "2px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",

            // Rounded corners & spacing
            borderRadius: "1rem",
            p: { xs: 3, sm: 4, md: 5 },

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
                fontSize: { xs: "1.4rem", sm: "2rem", md: "2.4rem" }, // Slightly reduced mobile size
                fontWeight: "bold",
                mb: 3,
                color: "#F8F9FA",
                textShadow: `
                0px 0px 10px red, 
                0px 0px 20px red, 
                0px 0px 40px red, 
                0px 0px 80px red
              `,                whiteSpace: "nowrap", // Ensures title stays in one row
                wordSpacing: "0.15rem", // Avoids letter overlap
                textAlign: "center", // Ensures full visibility in mobile
              }}
            >
              בניית תשתיות ומצלמות אבטחה
            </Typography>

            {/* Paragraph */}
            <Typography
              paragraph
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                fontWeight: "bold",
                color: "#F8F9FA",
                textShadow: `
                0px 0px 10px red, 
                0px 0px 20px red, 
                0px 0px 40px red, 
                0px 0px 80px red
              `, 
                direction: "rtl",
                unicodeBidi: "plaintext", // Fixes punctuation in Hebrew
              }}
            >
              כמעט כל בית עסק מבקש לדאוג לביטחון לקוחותיו ורכושו באמצעות מצלמות
              אבטחה מתקדמות. אנו מספקים פתרון קצה לקצה כולל תשתיות, מחשוב
              ואבטחה.
            </Typography>

            {/* Hebrew bullet list (RTL) with Lens Icon on the Right */}
            <List
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem"},
                fontWeight: "bold",
                color: "#1E3A8A",
                textShadow: `0px 0px 1px purple
                `,
                direction: "rtl",
                unicodeBidi: "plaintext",
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
                    flexDirection: "row", // Ensures icon stays on the right
                    alignItems: "center",
                    justifyContent: "flex-start", // Ensures text starts correctly
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      marginRight: "8px", // Pushes text left to keep icon on the right
                    }}
                  >
                    <img
                      src={LenIcon}
                      alt="Lens icon"
                      style={{ width: 20, height: 20 ,marginLeft:6}}
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
