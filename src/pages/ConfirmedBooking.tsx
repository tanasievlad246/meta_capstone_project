import { Navigate } from "react-router-dom"

export interface BookingConfirmationProps {
    booked: boolean
    date: string
    time: string
    guests: string
    occasion: string
}

export const ConfirmedBooking = ({ booking }: { booking: BookingConfirmationProps | null}) => {
    return booking ? <>
        {booking.date}
        {booking.time}
        {booking.guests}
        {booking.occasion}
        {booking.booked}
    </> : <Navigate to="/" replace />
}