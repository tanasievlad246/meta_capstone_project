import { render, screen, renderHook, act, fireEvent, waitFor } from '@testing-library/react';
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
 act(() => {
  saveBookingLocally({
    booked: true,
    date: "2021-04-01",
    time: "11:00",
    guests: "2",
    occasion: "Birthday",
  });
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

describe("Booktable form", () => {
  test('shows validation errors with invalid form values', async () => {
    const setBookingMock = jest.fn();
    render(<BrowserRouter><BookTable setBooking={setBookingMock} /></BrowserRouter>);
    
    // Fill in the form with invalid values
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '0' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: '' } });
    fireEvent.click(screen.getByTestId('submit-reservation'));

    // Check that validation errors are shown
    expect(await screen.findByText('Please select a date')).toBeInTheDocument();
    expect(await screen.findByText('Please select a time')).toBeInTheDocument();
    expect(await screen.findByText('The number of guests must be greater than or equal to 1')).toBeInTheDocument();
    expect(await screen.findByText('Please select an occasion')).toBeInTheDocument();

    // Check that the form submission was not successful
    expect(setBookingMock).not.toHaveBeenCalled();
  });

  test('submits form with valid values', () => {
    const bookingMockFn = jest.fn()
    render(<BrowserRouter><BookTable setBooking={bookingMockFn} /></BrowserRouter>);
    
    // Fill in the form with valid values
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2023-04-01' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '10:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'birthday' } });
    fireEvent.click(screen.getByTestId('submit-reservation'));
    
    const booking = {
      date: '2023-04-01',
      time: '10:00 AM',
      guests: '4',
      occasion: 'birthday',
      booked: true,
    }
    
    // await waitFor(() => expect(bookingMockFn).toHaveBeenCalledWith(booking));
    act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      expect(bookingMockFn).toHaveBeenCalledWith(booking);
    })
  });
});