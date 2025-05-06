import { Box, Typography } from "@mui/material";

const TitleCard : React.FC<{title:string}> = ({title}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // mb:"15px"
      }}
    >
      <Typography
        sx={{
          background:
            "radial-gradient(circle, rgb(74, 74, 74) 30%, rgb(62, 62, 62) 90%)",
          width: "fit-content",
          color: "#FFFFFF",
          px: "15px",
          fontSize: { xs: "36px", sm: "48px", md: "64px" },
          fontStyle: "italic",
          fontWeight: 500,
          borderRadius: "10px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default TitleCard