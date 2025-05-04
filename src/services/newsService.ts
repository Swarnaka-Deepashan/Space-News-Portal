import axios from "axios";
import { apiRequest, NewsResponse } from "./newsClient";

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
