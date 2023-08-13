import {
  Grid,
  Container,
  Typography,
  Link,
  AppBar,
  Box,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import cardImage from "../assets/openSourceProject.png";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    padding: "30.25%",
  },
  homeCard: {
    width: `calc(20vw)`,
    margin: "50px",
    alignItems: "center",
  },
  text: {
    margin: "20px",
    fontFamily: "Montserrat",
    fontWeight: 600,
  },
}));

const CodingAlliesOpenSource = () => {
  const classes = useStyles();
  const handleLinkClick = () => {
    window.open(
      "https://github.com/coding-allies/coding-allies-site/discussions/19",
      "_blank"
    );
  };
  return (
    <Card className={classes.homeCard} variant="outlined">
      <CardActionArea onClick={handleLinkClick}>
        <CardMedia
          className={classes.media}
          image={cardImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.text}>
            New to open source? Want to build Github portfolio? Join our open
            source community today!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CodingAlliesOpenSource;
