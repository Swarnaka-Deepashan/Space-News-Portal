import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../app/slices/newsSlice";
import { useAppSelector } from "../app/hook";

const Pagination: React.FC<{ totalNews: number; newsPerPage: number }> = ({
  totalNews,
  newsPerPage,
}) => {
  const pages: number[] = [];

  const dispatch = useDispatch();

  if (totalNews > 0 && newsPerPage > 0) {
    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
      pages.push(i);
    }
  }

    const currentPage = useAppSelector((state) => state.news.currentPage);
  

  if (pages.length > 0) {
    return (
      <Box sx={{display:"flex", gap:"5px"}}>
        {pages.map((page, pageIdx) => {
          return (
            <Box
              key={pageIdx}
              sx={{
                height: { xs: 30, sm: 40 },
                width: { xs: 30, sm: 40 },
                bgcolor: "#0C343E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                minWidth: 0,
                border:currentPage === page ? "1px solid white" : ""
              }}
              component={Button}
              onClick={() => {
                dispatch(setCurrentPage(page));
              }}
            >
              <Typography sx={{ color: "#E0E0E0" }}>{page}</Typography>
            </Box>
          );
        })}
      </Box>
    );
  }
};

export default Pagination;
