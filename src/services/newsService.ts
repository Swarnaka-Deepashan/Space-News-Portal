import axios from "axios";
import { apiRequest, News, NewsResponse } from "./newsClient";

export const fetchNews = async (): Promise<NewsResponse | null> => {
  try {
    return await apiRequest<NewsResponse>("/v4/articles/", "GET");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
      console.error(error.code);
      throw error; //rethrowing errorr
    } else {
      console.error(error);
      throw error; //rethrowing errorr
    }
  }
};

export const fetchNewsById = async (
  id: string
): Promise<News | null> => {
  try {
    return await apiRequest<News>(`/v4/articles/${id}`, "GET");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
      console.error(error.code);
      throw error; //rethrowing errorr
    } else {
      console.error(error);
      throw error; //rethrowing errorr
    }
  }
};
