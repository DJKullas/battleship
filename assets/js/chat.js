import React from 'react';


export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.message = this.message.bind(this);
  }

  message(message) {
    this.props.channel.push("message", {text: this.state.value}).
      receive("ok", state => this.setState(state));
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.message}>
        <label>
          Name:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
