import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/types'

interface WishlistState {
  items: Product[]
}

const initialState: WishlistState = {
  items: [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find(item => item.id === action.payload.id)
      if (exists) {
        state.items = state.items.filter(item => item.id !== action.payload.id)
      } else {
        state.items.push(action.payload)
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  },
})

export const { toggleWishlist, removeFromWishlist } = wishlistSlice.actions
export const selectWishlistItems = (state: { wishlist: WishlistState }) => state.wishlist.items
export const selectIsWishlisted = (state: { wishlist: WishlistState }, id: string) =>
  state.wishlist.items.some(item => item.id === id)

export default wishlistSlice.reducer
