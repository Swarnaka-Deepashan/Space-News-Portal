import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface ReadMoreButtonProps {
  onClick: () => void;
  label?: string;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ onClick, label = "Read more" }) => (
  <Box
    component={Button}
    onClick={onClick}
    sx={{
      width: "fit-content",
      height: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      px: "8px",
      borderRadius: "5px",
      bgcolor: "green",
      textTransform: "initial",
      transition: "transform 0.2s ease, background-color 0.2s ease",
      cursor: "pointer",
      "&:hover": {
        bgcolor: "#006400",
        transform: "scale(1.05)",
      },
      "&:active": {
        transform: "scale(0.95)",
      },
      "&:focus-visible": {
        outline: "2px solid #90caf9",
        outlineOffset: "2px",
      },
    }}
  >
    <Typography
      sx={{
        color: "#E0E0E0",
        fontStyle: "italic",
        fontWeight: "300",
        fontSize: "14px",
        pointerEvents: "none",
      }}
    >
      {label}
    </Typography>
  </Box>
);

export default ReadMoreButton;
