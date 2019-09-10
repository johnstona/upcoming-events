import React from 'react'

const EventList = ({ events }) => {
  console.log(events)
  return events.map(event => {
    return <div>{event.name}</div>
  })
}

export default EventList
