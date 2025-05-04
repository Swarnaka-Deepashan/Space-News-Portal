import { Box } from "@mui/material";
import TopStoryCard from "../components/TopStoryCard";
import NewsSection from "../components/NewsSection";
import { useEffect } from "react";
import { fetchNews } from "../services/newsService";

// import { useAppSelector } from 'app/hooks'
import { useAppSelector,useAppDispatch } from "../app/hook";
import { setNews, setNewsErrorState, setNewsLoadingState } from "../app/slices/newsSlice";


const HomePage = () => {
  const news = useAppSelector((state) => state.news.newsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        dispatch(setNewsLoadingState(true));

        const response = await fetchNews();

        if (response && response.results.length > 0) {
          dispatch(setNews(response.results));
          dispatch(setNewsErrorState(false));
        } else {
          dispatch(setNewsErrorState(true));
        }
      } catch (err) {
        dispatch(setNewsErrorState(true));
        console.error(err, "Failed to fetch news.");
      } finally {
        dispatch(setNewsLoadingState(false));
      }
    };

    fetchNewsData();
  }, [dispatch]);

  console.log("30 news", news);
  return (
    <Box>
      <Box sx={{ height: "100px" }}></Box>
      <TopStoryCard />
      <NewsSection />
      <Box sx={{ height: "500px" }}></Box>
    </Box>
  );
};

export default HomePage;
