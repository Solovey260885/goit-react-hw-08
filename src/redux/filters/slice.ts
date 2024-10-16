import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  name: string;
}

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatusFilter: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
