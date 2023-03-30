import { render, screen } from '@testing-library/react';
import { useDateInput } from './hooks';
import App from './App';
import { BookTable } from './pages/BookTable';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Booking form header', () => {
  render(<BookTable />);
  const header = screen.getByText(/Book Now/i);
  expect(header).toBeInTheDocument();
});

test('Changing Times', () => {
  const [availableTimes, handleTimeChange, initializeTimes] = useDateInput();
  initializeTimes();
  expect(availableTimes.times).toEqual(['18:00', '19:00', '20:00', '21:00', '22:00']);
  handleTimeChange(new Date('2021-10-10'));
  expect(availableTimes.times).toEqual(['14:00', '15:00', '16:00']);
});