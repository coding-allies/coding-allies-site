import { Component } from 'react';
import axios from 'axios';
import { Box, TextField, MenuItem, Container } from '@material-ui/core';
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
  },
  inputField: {
    margin: "10px 5px",
    width: "calc(100% - 10px)",
  },
  halfCol: {
    display: "inline-block",
    width: "50%",
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
      <Container maxWidth="lg">
        <h1>Contact Us</h1>
        <p className={classes.hilightText}>Please use this form to contact us. Alternatively, feel free to send us an email at admin@codingallies.org.</p>
        <Container maxWidth="sm">
        <form onSubmit={this.handleSubmit}>
          <TextField
            select
            fullWidth
            id="topic"
            label="Topic"
            defaultValue="Select"
            onChange={this.handleChange}
            name="entry.1519230818"
            variant="outlined"
            className={classes.inputField}
          >
            {this.topics.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Box className={classes.halfCol}>
            <TextField
              required
              id="firstName"
              label="First Name"
              defaultValue="&nbsp;"
              onChange={this.handleChange}
              name="entry.1466030423"
              variant="outlined"
              className={classes.inputField}
            />
          </Box>
          <Box className={classes.halfCol}>
          <TextField
            required
            id="lastName"
            label="Last Name"
            defaultValue="&nbsp;"
            onChange={this.handleChange}
            name="entry.363139444"
            variant="outlined"
            className={classes.inputField}
          />
          </Box>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            defaultValue="&nbsp;"
            onChange={this.handleChange}
            name="entry.1540871534"
            variant="outlined"
            className={classes.inputField}
          />
          <br></br>
          <TextField
            required
            fullWidth
            multiline
            id="message"
            label="Message"
            defaultValue="&nbsp;"
            onChange={this.handleChange}
            name="entry.834565993"
            variant="outlined"
            className={classes.inputField}
          />
          <br></br>
          <button
            className="btn btn-large right"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
        </Container>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
      </Container>
    );
  }
}

export default withStyles(styles)(Contact);