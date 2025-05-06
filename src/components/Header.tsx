import { Box, Button, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigate = useNavigate()


  return (
    <Box
      sx={{
        height: { xs: "50px", sm: "50px", md: "60px" },
        // bgcolor: "#282828",
        // backdropFilter: "blur(50px) saturate(180%)",
        WebkitBackdropFilter: "blur(50px) saturate(180%)",
        background: `linear-gradient(45deg,rgb(17, 79, 96,0.8) 30%, #071518 90%)`,
        borderBottom: "2px solid rgba(255, 255, 255, 0.171)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: "15px", sm: "20px", md: "30px" },
        zIndex: 5,
      }}
    >
      <Box
        component={Button}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ml: "-8px",
        }}
        onClick={()=>{
            navigate("/");
        }}
      >
        <Typography
          sx={{
            fontFamily: "Venite Adoremus",
            fontSize: { xs: "14px", sm: "15px", md: "18px" },
            color: "#E0E0E0",
          }}
        >
          SpaceNews
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          gap: { xs: "10px", sm: "20px" },
        }}
      >
        <Box
          sx={{
            bgcolor: "rgba(20, 89, 109, 0.2)",
            width: "110px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "5px",
            py: "2px",
            
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#E0E0E0" }}
          >
            Blogs
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "rgba(20, 89, 109, 0.2)",
            width: "110px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "5px",
            py: "2px",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#E0E0E0" }}
          >
            Shop Now
          </Typography>
        </Box>
        <Box
            component={Button}
          sx={{
            bgcolor: "rgba(20, 89, 109, 0.2)",
            width: "110px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "5px",
            py: "2px",
            textTransform:"initial"
          }}
          onClick={()=>{navigate("/about")}}
        >
          <Typography
            sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#E0E0E0" }}
          >
            About
          </Typography>
        </Box>
      </Box>
      <Box
        component={Button}
        sx={{
          display: {
            xs: "flex",
            sm: "none",
          },
          color: "#E0E0E0",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 0,
          mr: "-10px",
          //   p:0,
          //   m:0
        }}
        onClick={() => {
          setMobileMenuOpen(true);
        }}
      >
        <MenuIcon sx={{ fontSize: { xs: "30px", sm: "30px" } }} />
      </Box>
      <Box sx={{ display: "none" }}>
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </Box>
    </Box>
  );
}

export default Header