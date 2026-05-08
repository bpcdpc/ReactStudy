import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "조빈영" },
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = userSlice.actions;
export const userReducer = userSlice.reducer;
