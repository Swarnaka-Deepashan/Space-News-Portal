import { apiRequest, NewsResponse } from "./newsClient";

export const fetchNews = async (): Promise<NewsResponse | null> => {
  try {
    return await apiRequest<NewsResponse>("/v4/articles/", "GET");
  } catch (error) {
    console.error("Failed to fetch News:", error);
    return null;
  }
};
