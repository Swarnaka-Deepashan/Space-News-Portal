import { Box, Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#151515",
        px: { xs: "20px", md: "40px" },
        pt:{xs:"20px", sm:"60px",md:"80px"},
        pb: {xs:"20px", sm:"40px",md:"80px"},
        mt:"50px"
      }}
    >
      <Grid container spacing={2}>
        {/* Left Description */}
        <Grid
          size={{ xs: 12, sm: 5, md: 3.5 }}
        //   sx={{ border: "1px solid red" }}
        >
          <Box
            sx={{
              //   maxWidth: "300px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            //   border: "1px solid blue",
              width: "100%",
              alignItems: { xs: "center", sm: "start" },
            }}
          >
            <Typography
              sx={{ color: "#fff", fontWeight: "bold", fontSize: "20px" }}
            >
              Space News | Above all
            </Typography>
            <Typography
              sx={{
                color: "#ccc",
                fontSize: "14px",
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              SpaceNews explores the unknown in air and space, innovates for the
              benefit of humanity, and inspires the world through discovery.
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              About SpaceNews Mission
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                // fontWeight: "bold",

                cursor: "pointer",
                width: "fit-content",
                px: "10px",
                py: "2px",
                backgroundColor: "#d61f1f",
                borderRadius: "8px",
                transition: "0.3s",
                "&:hover": { backgroundColor: "#a61616" },
              }}
            >
              Join Us
            </Typography>
          </Box>
        </Grid>

        {/* Middle Navigation Columns */}
        <Grid
          size={{ xs: 12, sm: 7, md: 5.5 }}
        //   sx={{ border: "1px solid red" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row" },
              gap: "30px",
            //   border: "1px solid blue",
              width: "100%",
              justifyContent: "center",
              "@media(max-width : 475px)": {
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "0px",
                // bgcolor:"red"
              },
            }}
          >
            {/* Column 1 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Typography sx={{ color: "#E0E0E0" }}>News & Events</Typography>
              <Typography sx={{ color: "#E0E0E0" }}>Multimedia</Typography>
              <Typography
                sx={{ color: "#E0E0E0", display: "flex", alignItems: "center" }}
              >
                SPACE+
                <Box
                  component="span"
                  sx={{
                    fontSize: "10px",
                    backgroundColor: "red",
                    color: "white",
                    px: "4px",
                    ml: "4px",
                    borderRadius: "4px",
                  }}
                >
                  LIVE
                </Box>
              </Typography>
              <Typography sx={{ color: "#E0E0E0" }}>Missions</Typography>
            </Box>

            {/* Column 2 */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography sx={{ color: "#E0E0E0" }}>Earth</Typography>
              <Typography sx={{ color: "#E0E0E0" }}>
                The Solar System
              </Typography>
              <Typography sx={{ color: "#E0E0E0" }}>The Universe</Typography>
              <Typography sx={{ color: "#E0E0E0" }}>Science</Typography>
            </Box>

            {/* Column 3 */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography sx={{ color: "#E0E0E0" }}>Aeronautics</Typography>
              <Typography sx={{ color: "#E0E0E0" }}>Technology</Typography>
              <Typography sx={{ color: "#E0E0E0" }}>
                Learning Resources
              </Typography>
              <Typography sx={{ color: "#E0E0E0" }}>About SpaceNews</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Social Media Column */}
        <Grid size={{ xs: 12, md: 3 }} >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            //   border: "1px solid blue",
              alignItems: { xs: "center", md: "start" },
            }}
          >
            <Typography sx={{ color: "#A0A0A0", fontWeight: "bold" }}>
              Follow SpaceNews
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              {[FacebookIcon, InstagramIcon, XIcon, YouTubeIcon].map(
                (Icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      color: "#E0E0E0",
                      backgroundColor: "#444",
                      "&:hover": { backgroundColor: "#666" },
                    }}
                  >
                    <Icon />
                  </IconButton>
                )
              )}
            </Box>
            <Typography sx={{ color: "#E0E0E0" }}>
              More SpaceNews Social Accounts
            </Typography>
            <Typography sx={{ color: "#E0E0E0" }}>SpaceNews Newsletters</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
