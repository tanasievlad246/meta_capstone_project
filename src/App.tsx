import { Navbar } from "./components/Navbar";
import "./App.css";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookTable } from "./pages/BookTable";
import { BookingConfirmationProps } from "./pages/ConfirmedBooking";
import { ConfirmedBooking } from "./pages/ConfirmedBooking";
import { useState } from "react";
// TODO: Style p, span, h1, h2, h3, h4, h5, h6

function App() {
  const [booking, setBooking] = useState<BookingConfirmationProps | null>(null);
  
  const saveBookingLocally = (booking: BookingConfirmationProps) => {
    setBooking(booking);
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }

  return <>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booktable" element={<BookTable setBooking={saveBookingLocally}/>} />
      <Route path="/bookingconfirmation" element={<ConfirmedBooking booking={booking} />} />
    </Routes>
    <Footer />
  </> 
}

export default App;
