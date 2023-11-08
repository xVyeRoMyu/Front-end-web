import React, { Component } from 'react';
import './Clock.css'; // Import your CSS file

class ClockComponent extends Component {
  constructor() {
    super();
    this.state = {
      time: this.getCurrentTime(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        time: this.getCurrentTime(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    if (hours > 12) {
      day_night = "PM";
      hours = hours - 12;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }

    return hours + ":" + minutes + ":" + seconds + " " + day_night;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="display">
          <div id="time">{this.state.time}</div>
        </div>
        <span></span>
        <span></span>
      </div>
    );
  }
}

export default ClockComponent;

