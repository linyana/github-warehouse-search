import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      let localTheme = window.localStorage.getItem("theme");
      if (localTheme === "light") {
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
