import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { News } from "../../services/newsClient";

// Define a type for the slice state
export interface NewsState {
  //   value: number
  newsData: News[];
  newsErrorState: boolean;
  newsLoadingState: boolean;
}

// Define the initial state using that type
const initialState: NewsState = {
    newsData: [],
  newsErrorState: false,
  newsLoadingState: true,
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
  },
});

export const { setNewsErrorState, setNewsLoadingState, setNews } = newsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.news.value;

export default newsSlice.reducer;
