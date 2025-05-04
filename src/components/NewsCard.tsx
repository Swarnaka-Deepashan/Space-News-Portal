import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { generateTimeLabel } from "../utils/helper";
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

  return (
    // Main wrapper
    <Box
      sx={{
        // border: "1px solid red",
        bgcolor: "#1B1B1B",
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
          //  border: "1px solid red"
        }}
      >
        <Box
          sx={{
            //   width: { xs: "calc(100vw - 100px)", md: "100%" },
            //   height: { xs: "calc(100vw - 100px)", md: "100%" },
            // aspectRatio: { xs: "1 / 1" },
            width: "100%",
            height: "100%",
          }}
        >
          <img
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              // borderRadius: "15px"
            }}
            src={imagePath}
            alt="Top story image"
          />
        </Box>
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
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Box
            component={Button}
            onClick={() => {
              navigate(`/news/${id}`);
            }}
            sx={{
              // border: "1px solid green",
              width: "fit-content",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: "8px",
              borderRadius: "5px",
              bgcolor: "green",
              textTransform: "initial",
            }}
          >
            <Typography
              sx={{
                color: "#E0E0E0",
                fontStyle: "italic",
                fontWeight: "300",
                fontSize: "14px",
              }}
            >
              Read more
            </Typography>
          </Box>
          <Box
            sx={{
              // border: "1px solid green",
              width: "fit-content",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#364153",
              px: "8px",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                // display: { xs: "none", sm: "block" },
                color: "#E0E0E0",
                fontStyle: "italic",
                fontWeight: "300",
                fontSize: "14px",
              }}
            >
              {/* 4 minutes read */}
              {generateTimeLabel(isExtraSmallScreen)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;
