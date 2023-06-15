import { Typography, Button, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import cardImage from "../assets/community.png"

const useStyles = makeStyles((theme) => ({
	media: {
		height: 0,
		padding: '30.25%',
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

const DiscordCommunity = () => {
	const classes = useStyles();
	return (
		<Card className={classes.homeCard} variant="outlined">
			<CardContent>
              <CardMedia className={classes.media} image={cardImage} title="Community"/>
              <Typography className={classes.text}>Become part of our online community on Discord & Facebook and find our upcoming events.</Typography>
			  </CardContent>
            </Card>
	);
}

export default DiscordCommunity;