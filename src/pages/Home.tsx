import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import whiteBackground from "../assets/white-background.jpg"

class Home extends Component {
  render() {
    return (
      <Box>
        <img src={whiteBackground} width="80%" alt="White Background Image" />
      </Box>
    );
  }
}
export default Home;