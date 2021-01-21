import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValid: false, password: '' };
    this.errors = {
      empty: 'A password is required',
      minLength: 'Your password is too short'
    };
    this.errorMessage = this.errors.empty;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
    if (this.state.password.length === 0) {
      this.setState({ isValid: false });
      this.errorMessage = this.errors.empty;
    } else if (this.state.password.length < 8) {
      this.setState({ isValid: false });
      this.errorMessage = this.errors.minLength;
    } else {
      this.setState({ isValid: true });
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={this.state.password} onChange={this.handleChange}></input> <i className={this.state.isValid ? 'fas fa-check' : 'fas fa-times'}></i>
        <p className="error-message">{!this.state.isValid ? this.errorMessage : ''}</p>
      </div>
    );
  }
}

export default ValidatedInput;
