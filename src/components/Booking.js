import React from 'react'
import BookingForm from './BookingForm'

const Booking = (props) => {
  return (
    <BookingForm avalableTimes={props.avalableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm} />
  )
}

export default Booking