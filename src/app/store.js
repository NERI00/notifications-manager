import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './NavbarSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});
