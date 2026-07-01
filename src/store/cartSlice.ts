import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem, Product } from '@/types'

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity?: number; shade?: string }>) => {
      const { product, quantity = 1, shade } = action.payload
      const existingItem = state.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({ id: product.id, product, quantity, shade })
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
    clearCart: (state) => {
      state.items = []
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    },
    closeCart: (state) => {
      state.isOpen = false
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart, toggleCart, closeCart } = cartSlice.actions

export const selectCartItems = (state: { cart: CartState }) => state.cart.items
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0)
export const selectCartCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const selectIsCartOpen = (state: { cart: CartState }) => state.cart.isOpen

export default cartSlice.reducer
