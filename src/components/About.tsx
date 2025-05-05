import { Box, Grid, Typography } from "@mui/material";
import sampleImage08 from "../assets/images/sample-image-08.jpg";


const About = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
              style={{ objectFit: "cover", objectPosition: "50% 25%" }}
              src={sampleImage08}
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
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
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
              About the Application
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Typography
              sx={{
                color: "#E0E0E0",
                fontSize: { xs: "18px", sm: "22px", md: "28px" },
                lineHeight: { xs: "25px", sm: "30px", md: "35px" },
                maxWidth: "100%",
                hyphens: "auto",
              }}
            >
              We believe that staying updated with accurate and timely
              information empowers individuals to make better decisions and
              engage meaningfully with the world around them. Our mission is to
              deliver high-quality news content in a user-friendly and
              accessible way.
              <br />
              <br /> This application uses the Spaceflight News API (SNAPI) to
              fetch the latest news and updates about space exploration,
              missions, and industry developments. <br />
              <br /> This project was created by Swarnaka Deepashan, a
              passionate web and mobile developer dedicated to building
              user-friendly and impactful digital solutions.
            </Typography>
            {/* <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <InfoChip
                text={newsByIdData.authors[0].name || "Author not available"}
                //   text={"Name"}
                IconComponent={DrawOutlinedIcon}
                gradientStartColor={"#19C9CE"}
                gradientEndColor={"#0D6568"}
              />
              <InfoChip
                text={
                  formatPublishedDate(newsByIdData.published_at) ||
                  "Date not available"
                }
                IconComponent={EventNoteOutlinedIcon}
                gradientStartColor={"#CE191C"}
                gradientEndColor={"#680D0E"}
              />
              <InfoChip
                text={newsByIdData.news_site || "Source not available"}
                IconComponent={LanguageOutlinedIcon}
                gradientStartColor={"#19CE55"}
                gradientEndColor={"#0D6831"}
              />
            </Box> */}
          </Grid>
        </Grid>
      </Box>
    );
}

export default About