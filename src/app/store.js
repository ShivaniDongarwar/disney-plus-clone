import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieSlice from '../features/Movies/movieSlice';
import userSlice from '../features/User/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movieReducer:movieSlice.reducer,
    userReducer:userSlice.reducer
  },
});
