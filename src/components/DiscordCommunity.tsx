import {
  Typography,
  Button,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import cardImage from "../assets/community.png";

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

const DiscordCommunity = () => {
  const classes = useStyles();
  const handleLinkClick = () => {
    // Discord Invite that won't expire
    window.open("https://discord.gg/qd9GZhKtdY", "_blank");
  };

  return (
    <Card className={classes.homeCard} variant="outlined">
      <CardActionArea onClick={handleLinkClick}>
        <CardMedia
          className={classes.media}
          image={cardImage}
          title="Community"
        />
        <CardContent>
          <Typography className={classes.text}>
            Become part of our online community on Discord, practice DSA & find
            our upcoming events.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DiscordCommunity;
