import { Box, Grid, Typography } from "@mui/material";

const TopStoryCard = () => {
  return (
    <Box
      sx={{
        border: "1px solid blue",
        height: "80dvh",
        // height: "600px",
        mx: "25px",
        p: "25px",
        bgcolor: "#1B1B1B",
      }}
    >
      <Grid
        container
        spacing={"25px"}
        sx={{ border: "1px solid red", height: "100%" }}
      >
        {/* Text and info */}
        <Grid
          size={{ xs: 8 }}
          sx={{
            border: "1px solid white",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            height: "100%",
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              color: "green",
              fontSize: "64px",
              lineHeight: "80px",
              border: "1px solid blue",
              flex: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              // height:"100%"
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          {/* Subtitle */}
          <Typography
            sx={{
              color: "green",
              fontSize: "28px",
              lineHeight: "40px",
              border: "1px solid blue",
              flex: 4,
              overflow: "hidden",
              textOverflow: "ellipsis",
              // height:"100%"
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum
            minus dolores, tenetur cupiditate perspiciatis quasi magni ipsa
            deleniti? Facilis nostrum illo quia fugiat perferendis numquam quos
            debitis suscipit quae?. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia distinctio, cum atque aut vel labore a
            ratione ea consectetur, eos eveniet? Quo quod ratione repudiandae
            esse optio ea reiciendis ipsa.
          </Typography>
          <Box sx={{ flex: 1, border: "1px solid red" }}></Box>
        </Grid>
        {/* Image placeholder */}
        <Grid size={{ xs: 4 }} sx={{ border: "1px solid white" }}></Grid>
      </Grid>
    </Box>
  );
};

export default TopStoryCard;
