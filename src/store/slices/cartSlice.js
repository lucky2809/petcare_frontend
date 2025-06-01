import { createSlice, nanoid } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isOpen: false,
    bookings: [],
  },
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    addBooking: {
      reducer: (state, action) => {
        state.bookings.push(action.payload);
      },
      prepare: (booking) => ({
        payload: {
        //   cart_id: nanoid(),
          petName: booking.petName,
          boarding: { enabled: true, price: booking.boarding },
          grooming: { enabled: true, price: booking.grooming },
          taxi: { enabled: true, price: booking.taxi },
        },
      }),
    },
    toggleBoarding: (state, action) => {
      const booking = state.bookings.find(b => b.cart_id === action.payload);
      if (booking) {
        booking.boarding.enabled = !booking.boarding.enabled;
      }
    },
    toggleGrooming: (state, action) => {
      const booking = state.bookings.find(b => b.cart_id === action.payload);
      if (booking) {
        booking.grooming.enabled = !booking.grooming.enabled;
      }
    },
    toggleTaxi: (state, action) => {
      const booking = state.bookings.find(b => b.cart_id === action.payload);
      if (booking) {
        booking.taxi.enabled = !booking.taxi.enabled;
      }
    },
    removeBooking: (state, action) => {
      state.bookings = state.bookings.filter(b => b.cart_id !== action.payload);
    },
    clearBookings: (state) => {
      state.bookings = [];
    },
  },
});

export const {
  toggleCart,
  closeCart,
  addBooking,
  removeBooking,
  clearBookings,
  toggleGrooming,
  toggleBoarding,
  toggleTaxi,
} = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
