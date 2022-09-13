import { Grid, Container, Typography, Link, AppBar, Box, Button, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import cardImage from "../assets/advancedDataStructuresAndAlgorithms.png"

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

const AdvancedDataStructure = () => {
	const classes = useStyles();
	return (
		<Card className={classes.homeCard} variant="outlined">
			<CardContent>
              <CardMedia className={classes.media} image={cardImage} title="Contemplative Reptile"/>
              <Typography className={classes.text}>Solve medium to hard level Leetcode problems in a safe group study session.</Typography>
			  </CardContent>
              <CardActions>
        		<Button size="small">Click</Button>
      		  </CardActions>
            </Card>
	);
}

export default AdvancedDataStructure;