import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{ bgcolor: "#000",maxWidth:"1200px" }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
