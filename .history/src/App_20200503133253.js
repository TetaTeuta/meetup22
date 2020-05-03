import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { WarningAlert } from './Alert';
import { OfflineAlert } from './Alert';

class App extends Component {

  componentDidMount() {
    getEvents().then(response => this.setState({ events: response.events }));
    window.addEventListener('online', this.offLineAlert());
  }

  state = {
    events: [],
    page: null,
    defaultCity: '',
    // numberOfEvents: '',
    lat: null,
    lon: null,
    offlineText: ''
  }

  offLineAlert = () => {
    if (navigator.onLine === false) {
      this.setState({
        offlineText: 'You appear to be offline, this list is cached. Please connect to the internet for an updated list.'
      });
    } else {
      this.setState({
        offlineText: '',
      });
    }
  }

  updateEvents = (lat, lon, page) => {
    // if (!navigator.onLine) {
    //   this.setState({ warningText: 'No Network Connection! Event list loaded from last session.' });
    // } else {
    //   this.setState({ warningText: '' })
    // }
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
        <OfflineAlert text={this.state.offlineText} />
        {/* <WarningAlert text={this.state.warningText} /> */}
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.events.length} lat={this.state.lat} lon={this.state.lon} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;


