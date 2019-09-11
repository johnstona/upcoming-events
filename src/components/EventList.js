import React from 'react'
import moment from 'moment'

const EventList = ({ events }) => {
  console.log(events)
  return events.map(event => {
    return <div key={event.id}>{event.name} - {moment(event.start_datetime).calendar()} </div>
  })
}

export default EventList
