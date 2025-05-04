import { Box, Grid, Typography } from "@mui/material";
import sampleImage01 from "../assets/images/sample-image-01.jpg";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InfoChip from "./InfoChip";

const TopStoryCard = () => {
  return (
    <Box
      sx={{
        mx: "25px",
        p: "25px",
        bgcolor: "#1B1B1B",
        // border: "1px solid blue",
        // maxHeight: "80dvh",
        // height: "80dvh",
        // height: "600px",
      }}
    >
      <Grid container spacing={"25px"} sx={{}}>
        {/* Text and info */}
        <Grid
          size={{ xs: 8 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            // border: "1px solid white",
            // maxHeight: "80dvh",
            // minHeight: "60dvh",
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              color: "green",
              fontSize: "64px",
              lineHeight: "70px",
              maxWidth: "100%",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              hyphens: "auto",
              // overflowWrap:"break-word"
              // border: "1px solid blue",
            }}
          >
            NASA delays astrophysics mission call for proposals amid budget
            uncertainties.
          </Typography>
          {/* Subtitle */}
          <Typography
            sx={{
              color: "green",
              fontSize: "28px",
              lineHeight: "40px",
              maxWidth: "100%",
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              hyphens: "auto",
              // wordWrap: "break-word", 
              // overflowWrap: "break-word",
              // overflowWrap:"break-word"
              // textWrap:"wrap"
              // whiteSpace:"pre-wrap"
              // border: "1px solid blue",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum
            minus dolores, tenetur cupiditatitis suscipit quae?. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Debitis magnam, quo
            assumenda cupiditate odit ipsum porro facilis tempora eum unde,
            tenetur animi eligendi perspiciatis dignissimos. Quasi voluptatum
            animi at officiis.
          </Typography>
          {/* News Info Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "10px",
              // flex: 1,
              // border: "1px solid red",
            }}
          >
            {/* InfoChip - Author */}
            <InfoChip
              text={"Jeff Foust"}
              IconComponent={DrawOutlinedIcon}
              gradientStartColor={"#19C9CE"}
              gradientEndColor={"#0D6568"}
            />
            <InfoChip
              text={"4th of April"}
              IconComponent={EventNoteOutlinedIcon}
              gradientStartColor={"#CE191C"}
              gradientEndColor={"#680D0E"}
            />
            <InfoChip
              text={"NASA Spaceflight"}
              IconComponent={LanguageOutlinedIcon}
              gradientStartColor={"#19CE55"}
              gradientEndColor={"#0D6831"}
            />
          </Box>
        </Grid>

        {/* Image placeholder */}
        <Grid
          size={{ xs: 4 }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img
              width="100%"
              height="100%"
              style={{ objectFit: "cover", borderRadius: "15px" }}
              src={sampleImage01}
              alt="Top story image"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopStoryCard;
