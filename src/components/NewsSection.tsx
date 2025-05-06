import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import NewsCard from "./NewsCard";
import { useAppSelector } from "../app/hook";
import TitleCard from "./TitleCard";
import Pagination from "./Pagination";
import { News } from "../services/newsClient";

const NewsSection = () => {
  const news = useAppSelector((state) => state.news.newsData);
  const newsLoadingState = useAppSelector(
    (state) => state.news.newsLoadingState
  );
  const newsErrorState = useAppSelector((state) => state.news.newsErrorState);
  const currentPage = useAppSelector((state) => state.news.currentPage);

  const NEWS_PER_PAGE = 8;
  const lastNewsIndex = currentPage * NEWS_PER_PAGE;
  const firstNewsIndex = lastNewsIndex - NEWS_PER_PAGE;
  
  const updatedNews = news.slice(1); //removing topstory
  let currentNews : News[] = []; 

  if (!!updatedNews && updatedNews.length > 0) {
    currentNews = updatedNews.slice(firstNewsIndex, lastNewsIndex);
  }

  if (newsLoadingState) {
    return (
      <Box>
        <Box sx={{ mb: "15px" }}>
          <TitleCard title={"Latest News"} />
        </Box>

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
      </Box>
    );
  } else if (newsErrorState) {
    return (
      <Box>
        <Box sx={{ mb: "15px" }}>
          <TitleCard title={"Latest News"} />
        </Box>

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
      </Box>
    );
  } else if (!news) {
    return (
      <Box>
        <Box sx={{ mb: "15px" }}>
          <TitleCard title={"Latest News"} />
        </Box>
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
      </Box>
    );
  } else {
    return (
      <Box>
        <Box sx={{ mb: "15px" }}>
          <TitleCard title={"Latest News"} />
        </Box>
        <Grid
          container
          spacing={"15px"}
          sx={{ mx: { xs: "15px", sm: "25px" } }}
        >
          {currentNews.map((newsObj) => (
            <Grid key={newsObj.id} size={{ xs: 12, md: 6 }}>
              <NewsCard
                id={String(newsObj.id)}
                title={newsObj.title}
                summary={newsObj.summary}
                imagePath={newsObj.image_url}
              />
            </Grid>
          ))}
          {/* {news.map((newsObj) => (
            <Grid key={newsObj.id} size={{ xs: 12, md: 6 }}>
              <NewsCard
                id={String(newsObj.id)}
                title={newsObj.title}
                summary={newsObj.summary}
                imagePath={newsObj.image_url}
              />
            </Grid>
          ))} */}
        </Grid>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            mt: "15px",
          }}
        >
          <Pagination totalNews={updatedNews.length} newsPerPage={NEWS_PER_PAGE} />
        </Box>
      </Box>
    );
  }
};

export default NewsSection;
