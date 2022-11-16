import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeTheme: (state) => {
      let localtheme = window.localStorage.getItem("theme");
      if (localtheme === "light") {
        state.theme = "dark";
        window.localStorage.setItem("theme", "dark");
      } else {
        state.theme = "light";
        window.localStorage.setItem("theme", "light");
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
