import { createSlice } from "@reduxjs/toolkit";

interface FavoritesState {
  ids: string[];
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  } as FavoritesState,
  reducers: {
    addFavorite: (state, action: { payload: { id: string } }) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: { payload: { id: string } }) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
