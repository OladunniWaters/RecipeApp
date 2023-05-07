import { createSlice } from '@reduxjs/toolkit';
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      const itemInCart = state.favorite.find((item) => item.idMeal === action.payload.idMeal);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.favorite.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.favorite.find((item) => item.idMeal === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.favorite.find((item) => item.idMeal === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.favorite.filter((item) => item.idMeal !== action.payload);
      state.favorite = removeItem;
    },
  },
});
export const favoriteReducer = favoriteSlice.reducer;
export const {
  addToFavorite,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = favoriteSlice.actions;