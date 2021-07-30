import { Button, Grid, Input, Container, Typography, Link, Icon, Paper, CardMedia } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import logo from "../assets/ca_single_flower_logo.png"
import { FormatAlignCenter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: '100px',
    width: '100%',
  },
}));

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

function Footer() {
  const classes = useStyles();
  return (
    <Container component="footer" className={classes.footer}>
      <Grid container spacing={2} alignContent="center" alignItems="center" justify="center">
        <Grid item xs={4}>
          <text>
            Sign up for event updates
					</text>
          <div>
            <input
              type="email"
              placeholder="Email address"
              color="primary"
              style={{borderRadius: 15, color: "primary", padding: '0px 15px'}}>
            </input>
            <Button
              href="#"
              size="small"
              variant="contained"
              color="primary"
              style={{fontSize: 10, textTransform: 'none', borderRadius: 15, padding: '2px 15px', marginLeft: 10}}>
              Sign up
						</Button>
          </div>
        </Grid>
        <Grid container item xs={4} direction="column" alignItems="center" justify="center">
          <img src={logo} width={45} alt="Coding Allies Logo" />
          <Typography align="center">
            &copy; Coding Allies {new Date().getFullYear()}{"."}
          </Typography>
        </Grid>
        <Grid container item xs={4} direction="row" alignItems="center" justify="center">
          <text>
            Follow us on:
					</text>
          <Link href="https://www.facebook.com/groups/713361402552708">
            <FacebookIcon style={{padding: "3px", border: "solid 1px", borderRadius: "50%", marginInline: 5, fill: "initial"}}/>
          </Link>
          <Link href="https://twitter.com/codingallies?lang=en">
            <TwitterIcon style={{padding: "3px", border: "solid 1px", borderRadius: "50%", marginInline: 5, fill: "initial"}}/>
          </Link>
          <Link href="https://www.instagram.com/codingallies/">
            <InstagramIcon style={{padding: "3px", border: "solid 1px", borderRadius: "50%", marginInline: 5, fill: "initial"}}/>
          </Link>
          <Link href="https://www.linkedin.com/company/coding-allies/">
            <LinkedInIcon style={{padding: "3px", border: "solid 1px", borderRadius: "50%", marginInline: 5, fill: "initial"}}/>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
