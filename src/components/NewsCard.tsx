import { Box, Typography } from "@mui/material"

const NewsCard = () => {
  return (
    <Box
      sx={{
        border: "1px solid red",
        bgcolor: "#1B1B1B",
        width: "100%",
        height: "160px",
      }}
    >
      <Typography sx={{ color: "white" }}>NewsCard</Typography>
    </Box>
  );
}

export default NewsCard