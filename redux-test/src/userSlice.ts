import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type userState = {
  name: string;
};

const initialState: userState = { name: "조빈영" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeName: (state: userState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = userSlice.actions;
export const userReducer = userSlice.reducer;
