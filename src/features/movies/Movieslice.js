import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  movies: [""],
};

const movieslice = createSlice({
  name: "movie",
  initialstate,
  reducers: {
    setmovie: (state = initialstate, action = {}) => {
      state.movies = action.payload;
    },
  },
});

export const { setmovie } = movieslice.actions;

export const selectmovie = (state) => state.movie.movies;

export default movieslice.reducer;
