import React from "react";
import { Box, Typography } from "@mui/material";

interface ReadTimeLabelProps {
  isExtraSmallScreen: boolean;
  generateTimeLabel: (isXS: boolean) => string;
}

const ReadTimeLabel: React.FC<ReadTimeLabelProps> = ({ isExtraSmallScreen, generateTimeLabel }) => {
  return (
    <Box
      sx={{
        width: "fit-content",
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#364153",
        px: "8px",
        borderRadius: "5px",
      }}
    >
      <Typography
        sx={{
          color: "#E0E0E0",
          fontStyle: "italic",
          fontWeight: "300",
          fontSize: "14px",
        }}
      >
        {generateTimeLabel(isExtraSmallScreen)}
      </Typography>
    </Box>
  );
};

export default ReadTimeLabel;
