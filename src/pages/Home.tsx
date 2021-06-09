import React, { Component } from 'react';
import { Box, Container, Grid, Button, Typography } from '@material-ui/core';
import whiteBackground from "../assets/main-page-logo.png"
import {
  Link
} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="center">
        <div style={{position: 'relative', width:'100%'}}>
          <img style={{width: '100%'}} src={whiteBackground} alt="White Background Image"/>
          <nav style={{position: 'absolute', top: '125px', left: '188px'}}>
            <Typography variant="h2" gutterBottom>
              Women and gender<br/>minorities in tech.<br/>
              Empower. Prepare. <br/>Advance. Share.
            </Typography>
            <Button href="#contained-buttons" variant="contained" color="primary" style={{fontSize:'20px'}}>
              Join Today
            </Button>
          </nav>
        </div>
        <nav>
            <Typography variant="h5" gutterBottom style={{position: 'relative', width: '100%', textAlignLast: 'center'}}>
              We believe women and gender minorities should have a safe space and<br/>
              support system where they can foster their skills and careers in tech. We<br/>
              celebrate allyship and a community that is based on helping each other grow<br/>
              and succeed.
            </Typography>
            </nav>
      </Grid>
    );
  }
}
export default Home;