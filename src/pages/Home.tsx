import React, { Component } from 'react';
import { Box, Container, Grid, Button, Typography, Paper, createMuiTheme, ThemeProvider } from '@material-ui/core';
import whiteBackground from "../assets/MainPageImage.png"
import {
  Link
} from "react-router-dom";
import HomeCard from '../components/DataStructureAndAlgorithms';
import { normalize } from 'path';
import DataStructureAndAlgorithms from '../components/DataStructureAndAlgorithms';
import AdvancedDataStructure from '../components/AdvancedDataStructure';
import CodingAlliesOpenSource from '../components/CodingAlliesOpenSource';

const styles = {
  paperContainer: {
      backgroundImage: `url(${whiteBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: `calc(100vw + 48px)`,
      height:`calc(40vw + 48px)`
  },
  mainGrid:{
    marginTop:'auto',
    paddingTop: '100px',
    paddingLeft: '40px'
  },
  believe:{
    marginTop: '40px',
    paddingLeft: '60px',
    paddingRight: '50px'
  }
};

const theme = createMuiTheme({
  typography: {
    h4: {
     fontFamily: '"Montserrat"',
     fontSize: '1.2rem',
     '@media (min-width:800px)': {
          fontSize: '2.0rem',
      },
    },
    h5: {
      fontFamily: '"Montserrat"',
      fontSize: '1.0rem',
      '@media (min-width:800px)': {
           fontSize: '1.5rem',
       },
     }
  }
})

class Home extends Component {
  render() {
    const handleClick = () => {
      window.open("https://www.facebook.com/groups/codingallies");
    };
    return (
      <Grid>
        <div>
        <Paper style={styles.paperContainer}>
          <Grid>
            <Grid container item xs={6} direction="column" alignItems="center">
            <ThemeProvider theme={theme}>
              <Typography variant="h4" style={styles.mainGrid}>
                  Women and gender<br/>minorities in tech.<br/>
                  Empower. Prepare. <br/>Advance. Share.
              </Typography>
            </ThemeProvider>
            <Button onClick={handleClick} href="jointoday" variant="contained" color="primary">
              Join Today
            </Button>
            </Grid>
          </Grid>
        </Paper>
          </div>
        <Grid container item xs={12} justify="center" style={styles.believe}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">
              We believe women and gender minorities should have a safe space and
              support system where they can foster their skills and careers in tech. We
              celebrate allyship and a community that is based on helping each other grow
              and succeed.
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid container item xs={12} spacing={2} justify="center">
            <DataStructureAndAlgorithms/>
            <AdvancedDataStructure/>
            <CodingAlliesOpenSource/>
        </Grid>
      </Grid>
    );
  }
}
export default Home;