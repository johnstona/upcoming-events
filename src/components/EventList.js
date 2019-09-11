import React from 'react'
import moment from 'moment'

const EventList = ({ events }) => {
  console.log(events)
  return events.map(event => {
    return <div key={event.id} className='event'>
      <div className='event-name'>
        {event.name}
      </div>
      <div className='event-time'>
        {moment(event.start_datetime).calendar()}
      </div>
    </div>
  })
}

export default EventList
