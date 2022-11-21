import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme";
import imgSlice from "./img"

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    img: imgSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
