import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { News } from "../../services/newsClient";

// Define a type for the slice state
export interface NewsState {
  //   value: number
  newsData: News[];
  newsErrorState: boolean;
  newsLoadingState: boolean;
  newsByIdData: News | null;
  currentPage:number
  // postPerpage:number
}

// Define the initial state using that type
const initialState: NewsState = {
  newsData: [],
  newsErrorState: false,
  newsLoadingState: true,
  newsByIdData: null,
  currentPage:1,
  // postPerpage:6
  // newsByIdData: {
  //   id: -99,
  //   title: "",
  //   authors: [],
  //   url: "",
  //   image_url: "",
  //   news_site: "",
  //   summary: "",
  //   published_at: "",
  //   updated_at: "",
  //   featured: false,
  //   launches: [],
  //   events: [],
  // },
};

export const newsSlice = createSlice({
  name: "news",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setNewsErrorState: (state, action: PayloadAction<boolean>) => {
      state.newsErrorState = action.payload;
    },
    setNewsLoadingState: (state, action: PayloadAction<boolean>) => {
      state.newsLoadingState = action.payload;
    },

    setNews: (state, action: PayloadAction<News[]>) => {
      state.newsData = action.payload;
    },
    setNewsById: (state, action: PayloadAction<News>) => {
      state.newsByIdData = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setNewsErrorState, setNewsLoadingState, setNews,setNewsById,setCurrentPage } = newsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.news.value;

export default newsSlice.reducer;
