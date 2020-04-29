import React, { Component } from 'react';

class Event extends Component {
  state = {
    // events: [],
    showDetails: false
  }

  handleShowDetails = () => {
    this.setState({ showDetails: true });
  }

  render() {
    const showDetails = this.state.showDetails;

    return (
      <div className="event">
        <div className="event__Overview">
          <p className="event__Overview--name">{this.props.event.name}</p>
          <p className="event__Overview--localDate">{this.props.event.local_date} | {this.props.event.local_time}</p>
          <button onClick={() => this.handleShowDetails()}>show details</button>
        </div>
        {showDetails &&
          <div className="event__Details">
            <h3>About event:</h3>
            <h4><a href={this.props.event.link} target="_blank">GoTo MeetUp</a></h4>
            <p className="event__Details--description" dangerouslySetInnerHTML={{ __html: this.props.event.description }} />
          </div>
        }
      </div>
    );
  }
}

export default Event;