import { createSlice } from "@reduxjs/toolkit";

export interface ImgState {
  img: string | null;
}

export const initialState: ImgState = {
  img: "",
};

export const imgSlice = createSlice({
  name: "img",
  initialState,
  reducers: {
    GetImg: (state) => {
      if (
        localStorage.getItem("authorImg") !== null &&
        localStorage.getItem("authorImg")?.trim() !== ""
      ) {
        state.img = localStorage.getItem("authorImg");
      } else {
        state.img = "";
      }
    },
  },
});

export const { GetImg } = imgSlice.actions;

export default imgSlice.reducer;
