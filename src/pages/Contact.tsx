import { Component } from 'react';
import axios from 'axios';
import { Box, TextField, MenuItem, Container } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';
import './Contact.css';
// install axios and query-string and python-dotenv (0.19.0)

// Styling Starts
const styles = (createTheme: Theme) => createStyles({
  highlightTextContainer: {
    backgroundColor: createTheme.palette.primary.light,
    borderRadius: 10,
    padding: 10,
    margin: "10px 0 20px",
  },
  highlightText: {
    color:"black",
    margin: 0
  },
  formContent: {
    '&::after': {
      content: '""',
      clear: "both",
      height: 0,
      width: 0,
      display: "block",
      fontSize: 0,
    }
  },
  inputField: {
    margin: "10px 5px",
    width: "calc(100% - 10px)",
    '& .MuiInputBase-root': {
      borderRadius: 20,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black',
      borderWidth: 2,
    },
  },
  halfCol: {
    display: "inline-block",
    width: "50%",
  },
  submitButton: {
    fontSize: 15,
    height: 40,
    textTransform: "none",
    borderRadius: 40,
    padding: "8px 25px",
    margin: "10px 5px",
    display: "inline-block",
    backgroundColor: createTheme.palette.primary.main,
    boxShadow: "none",
    color: "white",
    border: 0,
    float: "right",
  }
});

interface Props extends WithStyles<typeof styles>{ };
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
      <Container maxWidth="sm">
        <h1>Contact Us</h1>
        <div className={classes.highlightTextContainer}>
        <p className={classes.highlightText}>Please use this form to contact us. Alternatively, feel free to send us an email at admin@codingallies.org.</p>
        </div>
        <form className={classes.formContent} onSubmit={this.handleSubmit}>
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
            className={classes.submitButton}
            type="submit"
          >
            SUBMIT
          </button>
        </form>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"</p>
      </Container>
    );
  }
}

export default withStyles(styles)(Contact);