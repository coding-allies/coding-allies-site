import { Grid, Container, Typography, Link, AppBar, Box, Button, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import cardImage from "../assets/cards-image.png"

const useStyles = makeStyles((theme) => ({
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9,
		marginTop:'10'
	  },
	  homeCard: {
		width:`calc(20vw)`,
		margin: '50px',
		alignItems: 'center'
	  }
}));

const HomaCard = () => {
	const classes = useStyles();
	return (
		<Card className={classes.homeCard} variant="outlined">
			<CardContent>
              <CardMedia className={classes.media} image={cardImage} title="Contemplative Reptile"/>
              <Typography>Sed ut perspiciatis</Typography>
              <Typography>Sed ut perspiciatis</Typography>
              <Typography>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</Typography>
			  </CardContent>
              <CardActions>
        		<Button size="small">Click</Button>
      		  </CardActions>
            </Card>
	);
}

export default HomaCard;