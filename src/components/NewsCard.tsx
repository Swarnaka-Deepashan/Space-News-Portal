import { Box, Typography } from "@mui/material";
import sampleImage02 from "../assets/images/sample-image-02.jpg";

const NewsCard = () => {
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
      <Box sx={{ height: "120px", width: "120px", border: "1px solid red" }}>
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
            src={sampleImage02}
            alt="Top story image"
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: "calc(100% - 100px)",
          height: "calc(100% - 20px)",
          overflow: "hidden",
        }}
      >
        {/* Title */}

        <Typography
          sx={{
            color: "white",
            fontSize: "28px",
            lineHeight: "30px",
            // width: "calc(100% - 100px)",
            border: "1px solid blue",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            hyphens: "auto",
          }}
        >
          Waltz defends ‘Golden Dome’ missile shield amid
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "16px",
            lineHeight: "30px",
            // width: "calc(100% - 100px)",
            border: "1px solid red",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            hyphens: "auto",
          }}
        >
          Waltz defends ‘Golden Dome’ missile shield amid Waltz defends ‘Golden
          Dome’ missile shield amid Waltz defends ‘Golden Dome’ missile shield
          amid
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsCard;
