import { render, screen, renderHook, act } from '@testing-library/react';
import { useDateInput } from './hooks';
import { BookTable } from './pages/BookTable';

test('Renders Booking form header', () => {
  render(<BookTable />);
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

  expect(result.current[0].times).toEqual([
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  act(() => {
    selectDate(new Date("2022-04-01"));
  });

  expect(result.current[0].date).toEqual(new Date("2022-04-01"));
  expect(result.current[0].times).toEqual(["14:00", "15:00", "16:00"]);
});
