import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPaused: true, time: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  start() {
    this.setState({ isPaused: false });
    this.timer = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000);
  }

  stop() {
    this.setState({ isPaused: true });
    clearInterval(this.timer);
  }

  reset() {
    this.setState({ time: 0 });
  }

  handleClick(e) {
    if (e.target.id === 'face') {
      if (this.state.isPaused) {
        this.reset();
      }
    } else if (e.target.id === 'icon') {
      if (this.state.isPaused) {
        this.start();
      } else {
        this.stop();
      }
    }
  }

  render() {
    return (
      <div>
        <div id="face" className="circle" onClick={this.handleClick}>
          <h1 className="text">{this.state.time}</h1>
        </div>
        <i id="icon" onClick= {this.handleClick} className={this.state.isPaused ? 'fas fa-play fa-2x' : 'fas fa-pause fa-2x'}></i>
      </div>
    );
  }
}

export default Stopwatch;
