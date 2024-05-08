import { createSlice } from "@reduxjs/toolkit";

export interface TranslationState {
  translation: string;
}

const initialState = (function () {
  return { translation: "" };
})();

export const translatorSlice = createSlice({
  name: "translator",
  initialState,
  reducers: {},
});

export const {} = translatorSlice.actions;
export default translatorSlice.reducer;
