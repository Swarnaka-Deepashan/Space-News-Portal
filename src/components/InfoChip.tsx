import { Box, SvgIconTypeMap, Typography } from "@mui/material";
import React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface InfoChipProps {
  text: string;
  gradientStartColor: string;
  gradientEndColor: string;
  IconComponent: OverridableComponent<SvgIconTypeMap>;
}

const InfoChip: React.FC<InfoChipProps> = ({
  text,
  gradientStartColor,
  gradientEndColor,
  IconComponent,
}) => {
  return (
    <Box
      sx={{
        height: "40px",
        width: "160px",
        borderRadius: "50px",
        background: `linear-gradient(45deg, ${gradientStartColor} 30%, ${gradientEndColor} 90%)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        px: "10px",
      }}
    >
      {/* Icon */}
      <IconComponent sx={{ flex: 1, color: "white" }} />
      <Typography
        sx={{
          color: "white",
          fontSize: "20px",
          maxWidth: "100%",
          overflow: "hidden",
          textWrap: "nowrap",
          textOverflow: "ellipsis",
          flex: 5,
          fontStyle: "italic",
          fontWeight:"300"
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default InfoChip;
