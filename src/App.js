import React from 'react';
import API from './adapters/API'
import Dropdown from './components/Dropdown'
import EventList from './components/EventList'
import AppHeader from './components/Header'
import './App.css'

class App extends React.Component {
  state = {
    events: []
  }

  search = (query) => {
    API.searchEvents(query)
    .then(resp => this.setState({events: JSON.parse(resp).events}))
  }

  render() {

    return <div className="app">
            <AppHeader />
            <Dropdown search={this.search} options={API.searchOptions}/>
            {(this.state.events.length > 0) ? <EventList events={this.state.events} /> : <div>There are no upcoming events for that =(</div>}
          </div>
  }
}

export default App;
