import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Grid container spacing={1} style={{ margin: 30 }}>
          {this.props.children}
        </Grid>
        <Footer />
      </>
    );
  }
}
export default Layout;