import { Box, Grid } from "@mui/material";

const TopStoryCard = () => {
  return (
    <Box
      sx={{
        border: "1px solid blue",
        height: "500px",
        mx: "25px",
        p:"25px"
      }}
    >
      <Grid container spacing={"25px"}>
        <Grid size={{ xs: 8 }}>
          <Box sx={{ border: "1px solid green" }}>Sample text</Box>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Box
            sx={{ border: "1px solid white" }}
          >Sample text</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopStoryCard;
