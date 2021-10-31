import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/Movieslice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
