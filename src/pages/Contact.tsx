import { Component } from 'react';
import axios from 'axios';
import { Box, TextField, MenuItem } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import './Contact.css';
// install axios and query-string and python-dotenv (0.19.0)

// Styling Starts
const styles = (theme: Theme) => createStyles({
  root: {
    backgroundColor: "red"
  },
  hilightText: {
    color: "red"
  }
});

interface Props extends WithStyles<typeof styles>{ }
class Contact extends Component<Props> {


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

  handleChange = (e:any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmitRequest = (url:any) => {
    let response;
    try {
      response = axios.post(url);
    } catch (e) {
      response = e;
      console.error(e);
    }
  }

  handleSubmit = (e:any) => {
    const data = {
      ...this.state
    }
    e.preventDefault();
    const formUrl = "https://docs.google.com/forms/d/e/"+process.env.REACT_APP_FORM_ID+"/formResponse";
    const queryString = require('query-string')
    const q = queryString.stringifyUrl({
      url: formUrl,
      query: data
    })
    this.formSubmitRequest(q);
    e.target.reset();
  };

  render() {
    const { classes } = this.props;
    return (
      <Box>
        <h1>Contact Us</h1>
        <p className={classes.hilightText}>Please use this form to contact us. Alternatively, feel free to send us an email at admin@codingallies.org.</p>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="topic"
            select
            label="Select"
            onChange={this.handleChange}
            variant="outlined"
            name="entry.1519230818"
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
            id="firstName"
            label="First Name"
            onChange={this.handleChange}
            variant="outlined"
            name="entry.1466030423"
          />
          <TextField
            required
            id="lastName"
            label="Last Name"
            onChange={this.handleChange}
            variant="outlined"
            name="entry.363139444"
          />
          <br></br>
          <TextField
            required
            id="email"
            label="Email"
            onChange={this.handleChange}
            variant="outlined"
            name="entry.1540871534"
          />
          <br></br>
          <TextField
            required
            id="message"
            label="Message"
            onChange={this.handleChange}
            variant="outlined"
            name="entry.834565993"
          />
          <br></br>
          <button
            className="btn btn-large right"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
      </Box>
    );
  }
}

export default withStyles(styles)(Contact);