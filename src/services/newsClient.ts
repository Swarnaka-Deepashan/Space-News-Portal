import axios, { AxiosResponse } from "axios";

export interface AuthorSocials {
  x?: string;
  youtube?: string;
  instagram?: string;
  linkedin?: string;
  mastodon?: string;
  bluesky?: string;
}

export interface Author {
  name: string;
  socials?: AuthorSocials | null;
}

export interface NewsEvent {
  event_id: number;
  provider: string;
}

export interface News {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: string[];
  events: NewsEvent[];
}

export interface NewsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: News[];
}

const newsClient = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiRequest = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: NewsResponse
): Promise<T> => {
  const response: AxiosResponse<T> = await newsClient({
    method,
    url,
    data,
  });

  return response.data;
};
