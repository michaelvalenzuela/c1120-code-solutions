import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isToggled: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isToggled) {
      this.setState({ isToggled: false });
    } else {
      this.setState({ isToggled: true });
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.isToggled ? 'toggle green' : 'toggle gray'}>
          <span onClick= {this.handleClick} className={this.state.isToggled ? 'circle on' : 'circle off'}></span>
        </div>
        <h1 className="text-position">{this.state.isToggled ? 'ON' : 'OFF'}</h1>
      </div>
    );
  }
}

export default ToggleSwitch;
