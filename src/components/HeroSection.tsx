import { Box, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import sampleImage07 from "../assets/images/sample-image-07.jpg";

const HeroSection = () => {
  // const navigate = useNavigate()

  return (
    <Box
      sx={{
        position: "relative",
        height: "70dvh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "end",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          width="100%"
          height="100%"
          style={{ objectFit: "cover", objectPosition: "50% 100%" }}
          src={sampleImage07}
          alt="Top story image"
        />
        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgba(0,0,0,1) 5%, rgba(0,0,0,0.1) 40%)",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          top: "100px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#E0E0E0",
            fontSize: { xs: "36px", sm: "48px", md: "48px" },
            lineHeight: { xs: "40px", sm: "50px", md: "50px" },
            maxWidth: "100%",
            hyphens: "auto",
            fontFamily: "Venite Adoremus",
          }}
        >
          SpaceNews
        </Typography>
        <Typography
          sx={{
            color: "#E0E0E0",
            fontSize: { xs: "18px", sm: "22px", md: "28px" },
            fontStyle: "italic",
            lineHeight: { xs: "25px", sm: "30px", md: "35px" },
            maxWidth: "100%",
            hyphens: "auto",
          }}
        >
          Lets explore the marvelous world above us
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
