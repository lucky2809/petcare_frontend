import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeCart,
  removeBooking,
  clearBookings,
  toggleGrooming,
  toggleTaxi,
  toggleBoarding,
} from '../../store/slices/cartSlice';

export default function CartDrawer() {
  const isOpen = useSelector((state) => state.cart.isOpen);
  const bookings = useSelector((state) => state.cart.bookings);
  const dispatch = useDispatch();

  const total = bookings.reduce(
    (sum, b) =>
      sum +
      (b.boarding.enabled ? b.boarding.price : 0) +
      (b.grooming.enabled ? b.grooming.price : 0) +
      (b.taxi.enabled ? b.taxi.price : 0),
    0
  );

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => dispatch(closeCart())}>
      <Box sx={{ width: 350, p: 2 }}>
        <Typography variant="h6">Your Cart</Typography>
        <Divider sx={{ my: 2 }} />

        {bookings.length === 0 ? (
          <Typography>No bookings yet.</Typography>
        ) : (
          bookings.map((booking) => (
            <Box key={booking.id} sx={{ mb: 2, border: '1px solid #ccc', borderRadius: 2, p: 2 }}>
              <Typography className='flex justify-between items-center' variant="subtitle1" fontWeight="bold">
                {booking.petName}
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => dispatch(removeBooking(booking.id))}
                >
                  <DeleteIcon />
                </IconButton>
              </Typography>
              {/* <Typography>Boarding: ₹{booking.boarding}</Typography> */}
              <div className='flex flex-col'>
                {booking.boarding.price !== 0 && <FormControlLabel
                  control={
                    <Checkbox
                      checked={booking.boarding.enabled}
                      onChange={() => dispatch(toggleBoarding(booking.id))}
                    />
                  }
                  label={`Boarding: ₹${booking.boarding.enabled ? booking.boarding.price : 0}`}
                />}

                {booking.grooming.price !== 0 && <FormControlLabel
                  control={
                    <Checkbox
                      checked={booking.grooming.enabled}
                      onChange={() => dispatch(toggleGrooming(booking.id))}
                    />
                  }
                  label={`Grooming: ₹${booking.grooming.enabled ? booking.grooming.price : 0}`}
                />}

                {booking.taxi.price !== 0 && <FormControlLabel
                  control={
                    <Checkbox
                      checked={booking.taxi.enabled}
                      onChange={() => dispatch(toggleTaxi(booking.id))}
                    />
                  }
                  label={`Taxi: ₹${booking.taxi.enabled ? booking.taxi.price : 0}`}
                />}
              </div>


            </Box>
          ))
        )}

        {bookings.length > 0 && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Total: ₹{total}</Typography>
            <Button
              variant="outlined"
              color="error"
              onClick={() => dispatch(clearBookings())}
              fullWidth
              sx={{ mt: 2 }}
            >
              Clear All
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
}