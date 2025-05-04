import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import sampleImage08 from "../assets/images/sample-image-08.jpg";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import InfoChip from "./InfoChip";
import { useAppSelector } from "../app/hook";

const TopStoryCard: React.FC = () => {
  const news = useAppSelector((state) => state.news.newsData);
  const newsLoadingState = useAppSelector(
    (state) => state.news.newsLoadingState
  );
  const newsErrorState = useAppSelector((state) => state.news.newsErrorState);

  const topStory = news[0]; // this can be undefinedd

  if (newsLoadingState) {
    return (
      <Box
        sx={{
          bgcolor: "#1B1B1B",
          width: "auto",
          height: "70dvh",
          mx: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  } else if (newsErrorState) {
    return (
      <Box
        sx={{
          bgcolor: "#1B1B1B",
          width: "auto",
          height: "70dvh",
          mx: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ color: "white", fontStyle: "italic", fontSize: "18px" }}
        >
          Error Fetching News
        </Typography>
      </Box>
    );
  } else if (!topStory) {
    return (
      <Box
        sx={{
          bgcolor: "#1B1B1B",
          width: "auto",
          height: "70dvh",
          mx: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ color: "white", fontStyle: "italic", fontSize: "18px" }}
        >
          No Data to Display
        </Typography>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          mx: { xs: "25px", sm: "25px" }, //Todo : Reduce mx for xs screens
          p: "25px",
          bgcolor: "#1B1B1B",
        }}
      >
        <Grid
          container
          spacing={"25px"}
          direction={{ xs: "column-reverse", md: "row" }}
        >
          {/* Text and info */}
          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "10px", sm: "15px", md: "20px" },
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                color: "#E0E0E0",
                // fontSize: "64px",
                fontSize: { xs: "36px", sm: "48px", md: "64px" },
                lineHeight: { xs: "40px", sm: "55px", md: "70px" },
                maxWidth: "100%",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                hyphens: "auto",
              }}
            >
              {/* NASA delays astrophysics mission call for proposals amid budget
              uncertainties. */}
              {topStory.title}
            </Typography>
            {/* Subtitle */}
            <Typography
              sx={{
                color: "#E0E0E0",
                // fontSize: "28px",
                fontSize: { xs: "18px", sm: "22px", md: "28px" },
                lineHeight: { xs: "25px", sm: "30px", md: "35px" },
                // lineHeight: "35px",
                maxWidth: "100%",
                display: "-webkit-box",
                WebkitLineClamp: 6,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                hyphens: "auto",
                // border:"1px solid red"
              }}
            >
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum
              minus dolores, tenetur cupiditatitis suscipit quae?. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Debitis magnam, quo
              assumenda cupiditate odit ipsum porro facilis tempora eum unde,
              tenetur animi eligendi perspiciatis dignissimos. Quasi voluptatum
              animi at officiis. */}
              {topStory.summary}
            </Typography>
            {/* News Info Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {/* InfoChip - Author */}
              <InfoChip
                text={"Jeff Foust"}
                IconComponent={DrawOutlinedIcon}
                gradientStartColor={"#19C9CE"}
                gradientEndColor={"#0D6568"}
              />
              <InfoChip
                text={"4th of April"}
                IconComponent={EventNoteOutlinedIcon}
                gradientStartColor={"#CE191C"}
                gradientEndColor={"#680D0E"}
              />
              <InfoChip
                text={"NASA Spaceflight"}
                IconComponent={LanguageOutlinedIcon}
                gradientStartColor={"#19CE55"}
                gradientEndColor={"#0D6831"}
              />
            </Box>
          </Grid>

          {/* Image placeholder */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                width: { xs: "calc(100vw - 100px)", md: "100%" },
                height: { xs: "calc(100vw - 100px)", md: "100%" },
                //  aspectRatio: {xs:"1 / 1"}
              }}
            >
              <img
                width="100%"
                height="100%"
                style={{ objectFit: "cover", borderRadius: "15px" }}
                src={topStory.image_url || sampleImage08}
                // src={sampleImage08}
                alt="Top story image"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default TopStoryCard;
