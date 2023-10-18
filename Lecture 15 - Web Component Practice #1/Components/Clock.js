class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getCurrentTime(),
    };
  }

  getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const dayNight = hours >= 12 ? "PM" : "AM";
    const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${dayNight}`;
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        time: this.getCurrentTime(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <div id="time">{this.state.time}</div>;
  }
}