import { render, screen, renderHook, act } from '@testing-library/react';
import { useState } from 'react';
import { useDateInput } from './hooks';
import { BookingConfirmationProps } from './pages/ConfirmedBooking';
import { BookTable } from './pages/BookTable';
import { fetchAPI } from './utils/api';
import { BrowserRouter } from 'react-router-dom';

test('Renders Booking form header', () => {
  const { result } = renderHook(() => useState<BookingConfirmationProps | null>());
  localStorage.clear();
  const saveBookingLocally = (booking: BookingConfirmationProps) => {
    result.current[1](booking);
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }
  
  saveBookingLocally({
    booked: true,
    date: "2021-04-01",
    time: "11:00",
    guests: "2",
    occasion: "Birthday",
  });

  expect(localStorage.getItem('bookings')).toBe('[{"booked":true,"date":"2021-04-01","time":"11:00","guests":"2","occasion":"Birthday"}]');

  render(
    <BrowserRouter>
      <BookTable setBooking={saveBookingLocally} />
    </BrowserRouter>
  );
  const header = screen.getByText(/Book Now/i);
  expect(header).toBeInTheDocument();
});

test("useDateInput", () => {
  const { result } = renderHook(() => useDateInput());
  const selectDate = result.current[1];
  const initializeTime = result.current[2];
  expect(result.current[0].date).toBe(null);
  expect(result.current[0].times).toEqual(["11:00", "12:00", "13:00"]);

  act(() => {
    initializeTime();
  });

  expect(result.current[0].times.length).toBeGreaterThan(0);

  act(() => {
    selectDate(new Date("2023-04-01"));
  });

  const mockTimes = jest.fn(() => fetchAPI(new Date("2023-04-01")));

  expect(result.current[0].date).toEqual(new Date("2023-04-01"));
  expect(result.current[0].times).toEqual(mockTimes());
});
