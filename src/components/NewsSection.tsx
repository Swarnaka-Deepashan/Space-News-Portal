import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import NewsCard from "./NewsCard";
import { useAppSelector } from "../app/hook";

const NewsSection = () => {
  const news = useAppSelector((state) => state.news.newsData);
  const newsLoadingState = useAppSelector(
    (state) => state.news.newsLoadingState
  );
  const newsErrorState = useAppSelector((state) => state.news.newsErrorState);

  if (newsLoadingState) {
    return (
      <Box
        sx={{
          bgcolor: "#1B1B1B",
          width: "auto",
          height: "500px",
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
          height: "500px",
          mx: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "100px"
        }}
      >
        <Typography
          sx={{ color: "white", fontStyle: "italic", fontSize: "18px" ,

          }}
        >
          Error Fetching News
        </Typography>
      </Box>
    );
  } else if (!news) {
    return (
      <Box
        sx={{
          bgcolor: "#1B1B1B",
          width: "auto",
          height: "500px",
          mx: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "100px",
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
      <Grid container spacing={"15px"} sx={{ mx: "25px", mt: "100px" }}>
        {news.map((newsObj) => (
          <Grid size={{ xs: 12, md: 6 }}>
            <NewsCard
              title={newsObj.title}
              summary={newsObj.summary}
              imagePath={newsObj.image_url}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default NewsSection;
