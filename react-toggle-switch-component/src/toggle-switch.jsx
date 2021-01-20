import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false, circle: 'circle off', toggle: 'toggle gray', text: 'OFF' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isToggled) {
      this.setState({ isToggled: false, circle: 'circle off', toggle: 'toggle gray', text: 'OFF' });
    } else {
      this.setState({ isToggled: true, circle: 'circle on', toggle: 'toggle green', text: 'ON' });
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.toggle}>
          <span onClick= {this.handleClick} className={this.state.circle}></span>
        </div>
        <h1 className="text-position">{this.state.text}</h1>
      </div>
    );
  }
}

export default ToggleSwitch;
