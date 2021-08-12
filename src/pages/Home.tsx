import React, { Component } from 'react';
import { Box, Container, Grid, Button, Typography } from '@material-ui/core';
import whiteBackground from "../assets/main-page-logo.png"
import {
  Link
} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="center" style={{position: 'absolute', width: '1520px', height: '651px', left: '0px', backgroundImage: 'url('+whiteBackground+')'}}>
        <div>
            <Typography style={{position: 'absolute', left: '10%', right: '0%', top: '11%', fontSize: '40px', lineHeight: '54px', letterSpacing: '-0.015em',
            fontFamily: 'Montserrat', fontStyle: 'normal', textAlign: 'left', height: '74px', width: '569px', borderRadius: 'nullpx'}} variant="h2" gutterBottom>
              Women and gender<br/>minorities in tech.<br/>
              Empower. Prepare. <br/>Advance. Share.
            </Typography>
            <Button style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '8px 22px',
            position: 'absolute', left: '11%', right: '77.98%', top: '50.06%', bottom: '40.33%', background: '#90AE49', borderRadius: '50px'}} href="jointoday" variant="contained" color="primary">
              Join Today
            </Button>
            </div>
        <nav style={{position: 'absolute', width: '1520px', height: '871px', left: '0px', top: '656px', background: '#FFFFFF'}}>
            <Typography variant="h5" gutterBottom style={{position: 'absolute', width: '1392px', height: '100px', left: '80px', 
            top: '56px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 'normal', fontSize: '36px', lineHeight: '50px',
            letterSpacing: '-0.015em', color: 'rgba(0, 0, 0, 0.8)'}}>
              We believe women and gender minorities should have a safe space and<br/>
              support system where they can foster their skills and careers in tech. We<br/>
              celebrate allyship and a community that is based on helping each other grow<br/>
              and succeed.
            </Typography>
            <div style={{alignItems:'horizontal'}}>
            <div style={{position: 'absolute', width: '413px', height: '523px', left: '80px', top: '292px', borderRadius: '20px', borderColor: "black"}}>
              <img style={{position: 'absolute', width: '413px', height: '280px', left: '0px', top: '0px', background: 'linear-gradient(360deg, rgba(238, 178, 235, 0.92) 0%, rgba(248, 224, 247, 0.21) 15.04%)', borderRadius: '0px 0px 0px 0px'}}></img>
              <Typography style={{position: 'absolute', width: '301px', height: '36px', left: '101px', top: '293px', fontFamily: 'Montserrat',
              fontStyle: 'normal', fontWeight: 'bold', fontSize: '24px', lineHeight: '36px', letterSpacing: '-0.015em', color: '#000000'}}>Sed ut perspiciatis</Typography>
              <Typography style={{position: 'absolute', width: '301px', height: '36px', left: '126px', top: '324px', fontWeight: 'bold', fontFamily: 'Montserrat', fontStyle: 'normal', 
              fontSize: '18px', lineHeight: '36px', letterSpacing: '-0.015em', color: '#AF41B5'}}>Sed ut perspiciatis</Typography>
              <Typography style={{position: 'absolute', width: '332px', height: '90px', left: '57px', top: '371px', fontFamily: 'Montserrat', fontStyle: 'normal', 
              fontWeight: 'normal', fontSize: '18px', lineHeight: '30px', letterSpacing: '-0.015em'}}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</Typography>
              <Button style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '8px 22px', position: 'absolute',
              left: '67.6%%', right: '1.50%', top: '88.47%', bottom: '4.82%', background: '#90AE49', borderRadius: '50px'}}>
                <Typography style={{position: 'static', left: '0%', right: '0%', top: '0%', bottom: '0%', fontFamily: 'Montserrat', fontStyle: 'normal',
                fontSize: '15px', lineHeight: '18px', display: 'flex', alignItems: 'center', textAlign: 'center', letterSpacing: '-0.015em',
                color: '#FFFFFF', flex: 'none',border: '0', margin: '0px 0px'}}>Click</Typography>
              </Button>
            </div>
            <div style={{position: 'absolute', width: '413px', height: '523px', left: '568px', top: '292px', borderRadius: '20px', borderColor: "black"}}>
              <img style={{position: 'absolute', width: '413px', height: '280px', left: '0px', top: '0px', background: 'linear-gradient(360deg, rgba(238, 178, 235, 0.92) 0%, rgba(248, 224, 247, 0.21) 15.04%)', borderRadius: '0px 0px 0px 0px'}}></img>
              <Typography style={{position: 'absolute', width: '301px', height: '36px', left: '101px', top: '293px', fontFamily: 'Montserrat',
              fontStyle: 'normal', fontWeight: 'bold', fontSize: '24px', lineHeight: '36px', letterSpacing: '-0.015em', color: '#000000'}}>Sed ut perspiciatis</Typography>
              <Typography style={{position: 'absolute', width: '301px', height: '36px', left: '126px', top: '324px', fontWeight: 'bold', fontFamily: 'Montserrat', fontStyle: 'normal', 
              fontSize: '18px', lineHeight: '36px', letterSpacing: '-0.015em', color: '#AF41B5'}}>Sed ut perspiciatis</Typography>
              <Typography style={{position: 'absolute', width: '332px', height: '90px', left: '57px', top: '371px', fontFamily: 'Montserrat', fontStyle: 'normal', 
              fontWeight: 'normal', fontSize: '18px', lineHeight: '30px', letterSpacing: '-0.015em'}}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</Typography>
              <Button style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '8px 22px', position: 'absolute',
              left: '67.6%%', right: '1.50%', top: '88.47%', bottom: '4.82%', background: '#90AE49', borderRadius: '50px'}}>
                <Typography style={{position: 'static', left: '0%', right: '0%', top: '0%', bottom: '0%', fontFamily: 'Montserrat', fontStyle: 'normal',
                fontSize: '15px', lineHeight: '18px', display: 'flex', alignItems: 'center', textAlign: 'center', letterSpacing: '-0.015em',
                color: '#FFFFFF', flex: 'none',border: '0', margin: '0px 0px'}}>Click</Typography>
              </Button>
            </div>
            <div style={{position: 'absolute', width: '413px', height: '523px', left: '1022px', top: '292px', borderRadius: '20px', borderColor: "black"}}>
              <img style={{position: 'absolute', width: '413px', height: '280px', left: '0px', top: '0px', background: 'linear-gradient(360deg, rgba(238, 178, 235, 0.92) 0%, rgba(248, 224, 247, 0.21) 15.04%)', borderRadius: '0px 0px 0px 0px'}}></img>
              <Typography style={{position: 'absolute', width: '301px', height: '36px', left: '101px', top: '293px', fontFamily: 'Montserrat',
              fontStyle: 'normal', fontWeight: 'bold', fontSize: '24px', lineHeight: '36px', letterSpacing: '-0.015em', color: '#000000'}}>Sed ut perspiciatis</Typography>
              <Typography style={{position: 'absolute', width: '301px', height: '36px', left: '126px', top: '324px', fontWeight: 'bold', fontFamily: 'Montserrat', fontStyle: 'normal', 
              fontSize: '18px', lineHeight: '36px', letterSpacing: '-0.015em', color: '#AF41B5'}}>Sed ut perspiciatis</Typography>
              <Typography style={{position: 'absolute', width: '332px', height: '90px', left: '57px', top: '371px', fontFamily: 'Montserrat', fontStyle: 'normal', 
              fontWeight: 'normal', fontSize: '18px', lineHeight: '30px', letterSpacing: '-0.015em'}}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</Typography>
              <Button style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '8px 22px', position: 'absolute',
              left: '67.6%%', right: '1.50%', top: '88.47%', bottom: '4.82%', background: '#90AE49', borderRadius: '50px'}}>
                <Typography style={{position: 'static', left: '0%', right: '0%', top: '0%', bottom: '0%', fontFamily: 'Montserrat', fontStyle: 'normal',
                fontSize: '15px', lineHeight: '18px', display: 'flex', alignItems: 'center', textAlign: 'center', letterSpacing: '-0.015em',
                color: '#FFFFFF', flex: 'none',border: '0', margin: '0px 0px'}}>Click</Typography>
              </Button>
            </div>
            </div>
          </nav>
      </Grid>
    );
  }
}
export default Home;