import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: '', clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.clicks < 3) {
      this.setState({ color: '', clicks: this.state.clicks + 1 });
    } else if (this.state.clicks < 6) {
      this.setState({ color: 'midnight-blue', clicks: this.state.clicks + 1 });
    } else if (this.state.clicks < 9) {
      this.setState({ color: 'slate-blue', clicks: this.state.clicks + 1 });
    } else if (this.state.clicks < 12) {
      this.setState({ color: 'indian-red', clicks: this.state.clicks + 1 });
    } else if (this.state.clicks < 15) {
      this.setState({ color: 'sandy-brown', clicks: this.state.clicks + 1 });
    } else if (this.state.clicks < 18) {
      this.setState({ color: 'yellow', clicks: this.state.clicks + 1 });
    } else {
      this.setState({ color: 'white', clicks: this.state.clicks + 1 });
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.state.color}>Hot Button</button>
    );
  }

}

export default HotButton;
