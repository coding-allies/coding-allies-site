import { Grid, Container, Typography, Link, AppBar, Box, Button, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import cardImage from "../assets/dataStructureAndAlgorithms.png"
import AlertDialog from './AlertDialog';

const useStyles = makeStyles((theme) => ({
	media: {
		height: 0,
		padding: '30.25%', // 16:9,
	  },
	  homeCard: {
		width:`calc(20vw)`,
		margin:'50px',
		alignItems: 'center'
	  },
	  text:{
		margin: '20px', 
		fontFamily:'Montserrat',
		fontWeight: 600
	  }
}));

const DataStructureAndAlgorithms = () => {
	const classes = useStyles();
	return (
		<Card className={classes.homeCard} variant="outlined">
			<CardContent>
              <CardMedia className={classes.media} image={cardImage} title="Contemplative Reptile"/>
              <Typography className={classes.text}>Practice free mock interview with your peers in a beginner-friendly safe environment.</Typography>
			  </CardContent>
              <CardActions>
			  <AlertDialog />
      		  </CardActions>
            </Card>
	);
}

export default DataStructureAndAlgorithms;