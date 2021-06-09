import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
export default Layout;