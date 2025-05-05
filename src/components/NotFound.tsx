import { Box, Grid, Typography } from "@mui/material";
import sampleImage09 from "../assets/images/sample-image-09.jpg";
import { useNavigate } from "react-router-dom";
import ReadMoreButton from "./ReadMoreButton";


const NotFound = () => {

    const navigate = useNavigate()

    return (
      <Box sx={{ display: "flex", flexDirection: "column", height: "100dvh" }}>
        <Box sx={{ height: "70dvh" }}>
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
              style={{ objectFit: "cover", objectPosition: "50% 70%" }}
              src={sampleImage09}
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
                  "linear-gradient(to top, rgba(0,0,0,1) 5%, rgba(0,0,0,0.1) 90%)",
              }}
            />
          </Box>
        </Box>
        <Grid
          container
          spacing={"15px"}
          sx={{
            mx: { xs: "20px", sm: "30px", md: "40px" },
            mt: { xs: "-80px", sm: "-60px", md: "-40px" },
            zIndex: 1,
          }}
        >
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center" },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                color: "#E0E0E0",
                fontSize: { xs: "36px", sm: "48px", md: "48px" },
                lineHeight: { xs: "40px", sm: "50px", md: "50px" },
                maxWidth: "100%",
                hyphens: "auto",
              }}
            >
              404 Not Found
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center" },
              width: "100%",
            }}
          >
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
              Sorry! We couldn't find what you want
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center" },
              width: "100%",
            }}
          >
            <ReadMoreButton onClick={() => navigate("/")} />
          </Grid>
        </Grid>
      </Box>
    );
}

export default NotFound