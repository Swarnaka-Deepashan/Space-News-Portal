import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { generateTimeLabel } from "../utils/helper";
import ReadMoreButton from "./ReadMoreButton";
import ReadTimeLabel from "./ReadTimeLabel";
import { useState } from "react";
// import { useParams } from "react-router-dom";
export interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  imagePath: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  summary,
  imagePath,
}) => {
  const isExtraSmallScreen = useMediaQuery("(max-width:600px)");

  const navigate = useNavigate();

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    // Main wrapper
    <Box
      sx={{
        // border: "1px solid red",
        // bgcolor: "#1B1B1B",
        bgcolor: "#151515",
        width: "100%",
        height: "140px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        px: "10px",
      }}
    >
      {/* Image placeholder */}
      <Box
        sx={{
          height: "120px",
          width: "120px",
          position: "relative",
          backgroundColor: "#2a2a2a", // gray background while loading
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!imageLoaded && (
          <CircularProgress
            size={24}
            sx={{ position: "absolute", zIndex: 1, color: "#ffffff88" }}
          />
        )}

        <img
          src={imagePath}
          alt="News preview"
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            borderRadius: "4px",
            display: imageLoaded ? "block" : "none",
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </Box>

      <Box
        sx={{
          width: "calc(100% - 100px)",
          height: "calc(100% - 20px)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {/* Title */}

        <Typography
          sx={{
            //   mb: "5px",
            color: "#E0E0E0",
            fontSize: { xs: "22px", sm: "24px" },
            lineHeight: "25px",
            // width: "calc(100% - 100px)",
            // border: "1px solid blue",
            display: "-webkit-box",
            // WebkitLineClamp: 2,
            WebkitLineClamp: { xs: 2, sm: 2 },
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            hyphens: "auto",
            "@media(max-width : 450px)": {
              fontSize: "18px",
              lineHeight: "20px",
              WebkitLineClamp: 3,
            },
          }}
        >
          {title}
        </Typography>

        {/* Text */}
        <Typography
          sx={{
            //   mb: "5px",
            color: "#E0E0E0",
            opacity: 0.5,
            fontSize: "16px",
            lineHeight: "20px",
            // width: "calc(100% - 100px)",
            // border: "1px solid red",
            display: "-webkit-box",
            // WebkitLineClamp: 2,
            WebkitLineClamp: { xs: 2, sm: 2 },
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            hyphens: "auto",
            "@media(max-width : 450px)": {
              fontSize: "14px",
              lineHeight: "18px",
            },
          }}
        >
          {summary}
        </Typography>

        {/* Bottom section */}
        <Box sx={{ display: "flex", gap: "5px", ml: "2px" }}>
          <ReadMoreButton onClick={() => navigate(`/news/${id}`)} />
          <ReadTimeLabel
            isExtraSmallScreen={isExtraSmallScreen}
            generateTimeLabel={generateTimeLabel}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;
