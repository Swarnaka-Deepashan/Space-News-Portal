import { Box } from "@mui/material";
import TopStoryCard from "../components/TopStoryCard";
import NewsSection from "../components/NewsSection";
import { useEffect } from "react";
import { fetchNews } from "../services/newsService";

// import { useAppSelector } from 'app/hooks'
import {  useAppDispatch } from "../app/hook";
import {
  setNews,
  setNewsErrorState,
  setNewsLoadingState,
} from "../app/slices/newsSlice";
import { notifyError } from "../utils/notifications";
import axios from "axios";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  // const news = useAppSelector((state) => state.news.newsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        dispatch(setNewsLoadingState(true));
        // dispatch(setNewsErrorState(false));

        const response = await fetchNews();

        if (response && response.results.length > 0) {
          dispatch(setNews(response.results));
          dispatch(setNewsErrorState(false));
        } else {
          dispatch(setNewsErrorState(true));
        }
      } catch (err) {
        dispatch(setNewsErrorState(true));

        if (axios.isAxiosError(err)) {
          console.error(err.message);
          console.error(err.code); //remove this
          notifyError(err.message);
        } else {
          console.error("Failed to fetch News.");
          notifyError("Failed to fetch News.");
        }
      } finally {
        dispatch(setNewsLoadingState(false));
      }
    };

    fetchNewsData();
  }, [dispatch]);

  // console.log("30 news", news);
  return (
    <Box>
      <Box sx={{ mb: { xs: "30px", sm: "40px", md: "50px" } }}>
        <HeroSection />
      </Box>
      <Box sx={{ mb: { xs: "50px", sm: "80px" } }}>
        <TopStoryCard />
      </Box>
      <Box sx={{ mb: { xs: "80px", sm: "80px" } }}>
      <NewsSection />
      </Box>
    </Box>
  );
};

export default HomePage;
