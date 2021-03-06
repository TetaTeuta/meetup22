import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { WarningAlert } from './Alert';

class App extends Component {

  componentDidMount() {
    getEvents().then(response => this.setState({ events: response.events }));
  }

  state = {
    events: [],
    page: null,
    defaultCity: '',
    // numberOfEvents: '',
    lat: null,
    lon: null,
    warningText: ''
  }

  updateEvents = (lat, lon, page) => {
    if (!navigator.onLine) {
      this.setState({ warningText: 'No Network Connection! Event list loaded from last session.' });
    } else {
      this.setState({ warningText: '' })
    }
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(response => this.setState({ events: response.events, lat: response.city.lat, lon: response.city.lon }));
    }
    else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(response => this.setState({ events: response.events, page: page }));
    }
    else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(response => this.setState({ events: response.events }));
    }
  }

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} defaultCity={this.state.defaultCity} />
        <WarningAlert text={this.state.warningText} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.events.length} lat={this.state.lat} lon={this.state.lon} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;


