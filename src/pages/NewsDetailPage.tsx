import { useEffect } from "react";
import NewsDetail from "../components/NewsDetail";
import { fetchNewsById } from "../services/newsService";
import {
  setNewsById,
  setNewsErrorState,
  setNewsLoadingState,
} from "../app/slices/newsSlice";
import axios from "axios";
import { notifyError } from "../utils/notifications";
import { useAppDispatch } from "../app/hook";
import { useParams } from "react-router-dom";

const NewsDetailPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchNewsData = async (id: string) => {
      try {
        dispatch(setNewsLoadingState(true));

        const response = await fetchNewsById(id);

        if (response) {
          dispatch(setNewsById(response));
          dispatch(setNewsErrorState(false));
        } else {
          dispatch(setNewsErrorState(true));
        }
      } catch (err) {
        dispatch(setNewsErrorState(true));

        if (axios.isAxiosError(err)) {
          console.error(err.message);
          console.error(err.code); //remove this
          notifyError(err.message);
        } else {
          console.error("Failed to fetch News.");
          notifyError("Failed to fetch News.");
        }
      } finally {
        dispatch(setNewsLoadingState(false));
      }
    };

    if (id) fetchNewsData(id);
  }, [dispatch, id]);

  return (
    <div>
      <NewsDetail />
    </div>
  );
};

export default NewsDetailPage;
