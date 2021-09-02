import React, { Component } from 'react';
import { Box, Container, Grid, Button, Typography, Paper } from '@material-ui/core';
import whiteBackground from "../assets/MainPageImage.png"
import {
  Link
} from "react-router-dom";
import HomeCard from '../components/HomeCard';

const styles = {
  paperContainer: {
      backgroundImage: `url(${whiteBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: `calc(100vw + 48px)`,
      height:`calc(40vw + 48px)`
  },
  mainGrid:{
    marginTop:'100px'
  }
};
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
            <Typography variant="h3" style={styles.mainGrid}>
                Women and gender<br/>minorities in tech.<br/>
                Empower. Prepare. <br/>Advance. Share.
              </Typography>
              <Button onClick={handleClick} href="jointoday" variant="contained" color="primary">
                Join Today
              </Button>
            </Grid>
          </Grid>
        </Paper>
          </div>
        <Grid container item xs={12} justify="center" style={styles.mainGrid}>
            <Typography variant="h4">
              We believe women and gender minorities should have a safe space and<br/>
              support system where they can foster their skills and careers in tech. We<br/>
              celebrate allyship and a community that is based on helping each other grow<br/>
              and succeed.
            </Typography>
        </Grid>
        <Grid container item xs={12} justify="center">
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
        </Grid>
      </Grid>
    );
  }
}
export default Home;