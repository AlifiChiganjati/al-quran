import { createBrowserRouter } from "react-router-dom";
import HomePage from "./home";
import DetailSurahPage from "./detailSurah";

export const router = createBrowserRouter([
  {
    path: "/al-quran/",
    element: <HomePage />,
  },
  {
    path: "/al-quran/surah/:id",
    element: <DetailSurahPage />,
  },
]);
