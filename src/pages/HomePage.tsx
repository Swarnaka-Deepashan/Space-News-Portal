import { Box } from "@mui/material";
import TopStoryCard from "../components/TopStoryCard";
import NewsSection from "../components/NewsSection";

const HomePage = () => {
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
