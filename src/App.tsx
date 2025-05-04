import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  GlobalStyles,
} from "@mui/material";
import HomePage from "./pages/HomePage";
import SFProDisplay from "./assets/fonts/SF-Pro-Display-Regular.otf";
import SFProDisplayLightItalic from "./assets/fonts/SF-Pro-Display-LightItalic.otf";
import VeniteAdoremus from "./assets/fonts/VeniteAdoremus-rgRBA.ttf";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import NewsDetailPage from "./pages/NewsDetailPage";

const theme = createTheme({
  typography: {
    fontFamily: "'SF-Pro-Display', Arial, sans-serif",
  },
});

const globalStyles = (
  <GlobalStyles
    styles={`
      @font-face {
        font-family: 'SF-Pro-Display';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('SF-Pro-Display'), local('SF-Pro-Display-Regular'), url(${SFProDisplay}) format('opentype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      @font-face {
        font-family: 'SF-Pro-Display';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: local('SF-Pro-Display Light Italic'), local('SF-Pro-Display-LightItalic'), url(${SFProDisplayLightItalic}) format('opentype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      @font-face {
        font-family: 'Venite Adoremus';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Venite Adoremus'), url(${VeniteAdoremus}) format('truetype');
      }
    `}
  />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <div className="container">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="news/:id" element={<NewsDetailPage />} />
        </Routes>
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
