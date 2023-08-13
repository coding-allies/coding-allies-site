import { Component } from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';

class Layout extends Component {
  render() {
    return (
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </Grid>
    );
  }
}
export default Layout;