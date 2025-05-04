import { Grid } from "@mui/material"
import NewsCard from "./NewsCard"

const NewsSection = () => {
  return (
    <Grid container spacing={"15px"} sx={{ mx: "25px", mt: "100px" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <NewsCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <NewsCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <NewsCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <NewsCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <NewsCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <NewsCard />
        </Grid>
      </Grid>
  )
}

export default NewsSection