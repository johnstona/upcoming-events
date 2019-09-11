import React from 'react'
import moment from 'moment'

const EventList = ({ events }) => {
  console.log(events)
  return <div className='container'>
    {events.map(event => {
      return <div key={event.id} className='row'>
        <div className='col-sm'>
          {event.name}
        </div>
        <div className='col-sm'>
          {moment(event.start_datetime).calendar()}
        </div>
      </div>
    }
    )}
  </div>
}

export default EventList
