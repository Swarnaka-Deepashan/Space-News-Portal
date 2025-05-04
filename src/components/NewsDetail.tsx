import { Box, CircularProgress, Grid, Typography } from "@mui/material";
// import sampleImage05 from "../assets/images/sample-image-05.jpg";
import InfoChip from "./InfoChip";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useAppSelector } from "../app/hook";
import { formatPublishedDate } from "../utils/helper";

const NewsDetail = () => {

  const newsByIdData = useAppSelector((state) => state.news.newsByIdData);
  const newsLoadingState = useAppSelector(
    (state) => state.news.newsLoadingState
  );
  const newsErrorState = useAppSelector((state) => state.news.newsErrorState);


  if (newsLoadingState) {
      return (
        <Box
          sx={{
            bgcolor: "black",
            width: "auto",
            height: "100dvh",
            mx: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={60} />
        </Box>
      );
    } else if (newsErrorState) {
      return (
        <Box
          sx={{
            bgcolor: "black",
            width: "auto",
            height: "100dvh",
            mx: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // mt: "100px"
          }}
        >
          <Typography
            sx={{ color: "white", fontStyle: "italic", fontSize: "18px" ,
  
            }}
          >
            Error Fetching News
          </Typography>
        </Box>
      );
    } else if (!newsByIdData) {
      return (
        <Box
          sx={{
            bgcolor: "black",
            width: "auto",
            height: "100dvh",
            mx: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "100px",
          }}
        >
          <Typography
            sx={{ color: "white", fontStyle: "italic", fontSize: "18px" }}
          >
            No Data to Display
          </Typography>
        </Box>
      );
    } else {
        return (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ height: "80dvh" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "end",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover", objectPosition: "50% 25%" }}
                  src={newsByIdData.image_url}
                  // src={sampleImage08}
                  alt="Top story image"
                />
                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,1) 5%, rgba(0,0,0,0.1) 90%)",
                  }}
                />
              </Box>
            </Box>
            <Grid
              container
              spacing={"15px"}
              sx={{
                mx: { xs: "20px", sm: "30px", md: "40px" },
                mt: "-30px",
                zIndex: 1,
              }}
            >
              <Grid size={{ xs: 12, md: 4 }} sx={{}}>
                <Typography
                  sx={{
                    color: "#E0E0E0",
                    fontSize: { xs: "36px", sm: "48px", md: "48px" },
                    lineHeight: { xs: "40px", sm: "50px", md: "50px" },
                    maxWidth: "100%",
                    hyphens: "auto",
                  }}
                >
                  {/* NASA delays astrophysics mission call for proposals amid budget
                    uncertainties. */}
                  {newsByIdData.title}
                </Typography>
              </Grid>
              <Grid
                size={{ xs: 12, md: 8 }}
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Typography
                  sx={{
                    color: "#E0E0E0",
                    fontSize: { xs: "18px", sm: "22px", md: "28px" },
                    lineHeight: { xs: "25px", sm: "30px", md: "35px" },
                    maxWidth: "100%",
                    hyphens: "auto",
                  }}
                >
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum
                    minus dolores, tenetur cupiditatitis suscipit quae?. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Debitis magnam, quo
                    assumenda cupiditate odit ipsum porro facilis tempora eum unde,
                    tenetur animi eligendi perspiciatis dignissimos. Quasi voluptatum
                    animi at officiis. */}
                  {newsByIdData.summary}
                </Typography>
                <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <InfoChip
                    text={
                      newsByIdData.authors[0].name || "Author not available"
                    }
                    //   text={"Name"}
                    IconComponent={DrawOutlinedIcon}
                    gradientStartColor={"#19C9CE"}
                    gradientEndColor={"#0D6568"}
                  />
                  <InfoChip
                    text={
                      formatPublishedDate(newsByIdData.published_at) ||
                      "Date not available"
                    }
                    IconComponent={EventNoteOutlinedIcon}
                    gradientStartColor={"#CE191C"}
                    gradientEndColor={"#680D0E"}
                  />
                  <InfoChip
                    text={newsByIdData.news_site || "Source not available"}
                    IconComponent={LanguageOutlinedIcon}
                    gradientStartColor={"#19CE55"}
                    gradientEndColor={"#0D6831"}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        );
    }
  
};

export default NewsDetail;
