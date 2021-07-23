

import React,{Component} from 'react';
import DSAHosts from "../components/DSACards/DSAHostsCards";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import img from "../assets/img1.png";

const dsaHostCard=[
  {
    image:'/static/media/ca_logo.048e32ba.png',
    title: 'Coding Allies',
    description:'ABOUT PAGE Main Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    image:'/static/media/ca_logo.048e32ba.png',
    title: 'Coding Allies',
    description:'ABOUT PAGE Main Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },  
  {
    image:'/static/media/ca_logo.048e32ba.png',
    title: 'Coding Allies',
    description:'ABOUT PAGE Main Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    image:'/static/media/ca_logo.048e32ba.png',
    title: 'Coding Allies',
    description:'ABOUT PAGE Main Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    image:'/static/media/ca_logo.048e32ba.png',
    title: 'Coding Allies',
    description:'ABOUT PAGE Main Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
const BackgroundHead = {
  backgroundImage: 'url('+img+')',
  
  }
class About extends Component {
  render() {
    
    return (
  //     <DSAHosts
  //     image="/static/media/ca_logo.048e32ba.png" title="Coding Allies"
  //   description={"ABOUT PAGE Main Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
  // />
  <>
<div style={{backgroundImage:'url('+img+')',width:"10000px",height:"450px"}}>
  <div style={{backgroundColor:"mistyrose",width:"340px", opacity:"0.8",marginTop:"30px"}}>
<Typography gutterBottom variant="h5" component="h2">Coding Allies is an all-volunteer</Typography>
</div>
<div style={{backgroundColor:"mistyrose",width:"245px", opacity:"0.8"}}>
<Typography gutterBottom variant="h5" component="h2"> non-profit organization</Typography>
</div>
<div style={{backgroundColor:"black",width:"650px", opacity:"0.5" ,marginTop:"30px"}}>
<Typography style={{color:"white"}} variant="body2" component="p">As such, our volunteers are core to how and why we do things. Meet the team of dedicated passionate volunteers, who generously spend their time to reach our goal of creating safe and welcoming space for women and gender minorities in tech.</Typography>
  
  </div>
  </div>
  <Box p={5}>
  <Grid container spacing={5} >
      {dsaHostCard.map((dsaHostCard,i) => { 
       return (
       <Grid key={i} item>
       <DSAHosts {...dsaHostCard}/>
        </Grid>
       );
      })}
     </Grid>
     </Box>
     </>
      // <Box>
      //   <h5>About</h5>
      //   <p>ABOUT PAGE Main Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      // </Box>
      
    );
  }
}

export default About;
