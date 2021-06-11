import React, { Component } from 'react';
import { Box, TextField, MenuItem } from '@material-ui/core';
import './Contact.css';

class Contact extends Component {

  state = {
    topic: '',
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }

  topics = [
    {
      value: 'Volunteering',
      label: 'Volunteering',
    },
    {
      value: 'Company Partnership',
      label: 'Company Partnership',
    },
    {
      value: 'Other',
      label: 'Other',
    },
  ];

  handleTopicInput = (e:any) => {
    this.setState({ topic: e.target.value });
  };
  handleFirstNameInput = (e:any) => {
    this.setState({ firstName: e.target.value });
  };
  handleLastNameInput = (e:any) => {
    this.setState({ lastName: e.target.value });
  };
  handleEmailInput = (e:any) => {
    this.setState({ email: e.target.value });
  };
  handleMessageInput = (e:any) => {
    this.setState({ message: e.target.value });
  };

  logInfo = (e:any) => {
    e.preventDefault();
    console.log(this.state.topic);
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.message);
  };

  render() {
    return (
      <Box>
        <h1>Contact Us</h1>
        <p>Please use this form to contact us. Alternatively, feel free to send us an email at admin@codingallies.org.</p>
        <form>
          <TextField
            id="outlined-select-topic"
            className="text-field"
            select
            label="Select"
            value={this.state.topic}
            onChange={this.handleTopicInput}
            // helperText="Please select your topic"
            variant="outlined"
          >
            {this.topics.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br></br>
          <TextField
            required
            id="outlined-required"
            className="text-field"
            label="First Name"
            // defaultValue=""
            value={this.state.firstName}
            onChange={this.handleFirstNameInput}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            className="text"
            label="Last Name"
            // defaultValue=""
            value={this.state.lastName}
            onChange={this.handleLastNameInput}
            variant="outlined"
          />
          <br></br>
          <TextField
            required
            id="outlined-required"
            className="text-field"
            label="Email"
            // defaultValue=""
            value={this.state.email}
            onChange={this.handleEmailInput}
            variant="outlined"
          />
          <br></br>
          <TextField
            required
            id="outlined-required"
            className="text-field"
            label="Message"
            // defaultValue=""
            value={this.state.message}
            onChange={this.handleMessageInput}
            variant="outlined"
          />
          <br></br>
          <button
            className="btn btn-large right"
            onClick={this.logInfo}
          >
            SUBMIT
          </button>
        </form>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
      </Box>
    );
  }
}

export default Contact;