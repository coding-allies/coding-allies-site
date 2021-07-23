import {makeStyles} from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Box,Grid,Paper,Typography } from '@material-ui/core';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


const useStyles=makeStyles ({
    root:{
      maxWidth:345,
    },
    media:{
      height:70,
      width:90,
      margin: 'auto'
    }
  });
  interface Props
  {
      image:string;
      title:string;
      description:string;
  }
function DSAHosts({image,title,description}:Props){
    const classes=useStyles();
    return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia className={classes.media}  
      image={image}
      title={title}/>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
          <Typography  variant="body2" color="textSecondary" component="p">{description}
</Typography>

      </CardContent>
    </CardActionArea>
  </Card>
    );
}
export default DSAHosts