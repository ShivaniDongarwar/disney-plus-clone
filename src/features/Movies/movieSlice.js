import { createSlice } from "@reduxjs/toolkit";
const initialState = { movies: [] };
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;

    },
  },
});
// export const selectMovie = (state) => state.movies.movies;

export const movieActions = movieSlice.actions;
export default movieSlice;
