import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.addContact(contact);
    this.reset();
  };
  // clear input field after submission  //
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <br />
          <input
            onChange={this.handleInputChange}
            type="text"
            name="name"
            value={this.state.name}
            required
          />
        </label>
        <br />
        <label>
          Number
          <br />
          <input
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            value={this.state.number}
            required
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
