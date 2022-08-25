import { Button, Grid, Container, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import logo from "../assets/ca_single_flower_logo.png";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    minHeight: "100px",
    width: "100%",
  },

  text: {
    display: "block",
    textAlign: "left",
    fontSize: 18,
    fontWeight: 200,
    margin: "0 auto 6px",
  }
}));

const SubscribeFormControl = withStyles((theme) => ({
  root: {
    display: "inline-block",
  }
}))(FormControl);

const BootstrapInput = withStyles((theme) => ({
  root: {
    display: "inline-block",
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    display: "inline-block",
    fontSize: 15,
    borderRadius: 50,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    width: "auto",
    height: 40,
    boxSizing: "border-box",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

function Footer() {
  const classes = useStyles();
  return (
    <Container component="footer" className={classes.footer}>
      <Grid
        container
        spacing={2}
        alignContent="center"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={4}>
          <p className={classes.text}>Sign up for event updates</p>
            <form noValidate>
              <SubscribeFormControl>
                <BootstrapInput
                  defaultValue="Email"
                  id="bootstrap-input"
                />
                <Button
                  href="#"
                  size="small"
                  variant="contained"
                  color="primary"
                  style={{
                    fontSize: 15,
                    height: 40,
                    textTransform: "none",
                    borderRadius: 40,
                    padding: "8px 25px",
                    marginLeft: 10,
                    display: "inline-block",
                  }}
                >
                  Sign up
                </Button>{" "}
              </SubscribeFormControl>
            </form>
        </Grid>
        <Grid
          container
          item
          xs={4}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <img src={logo} width={45} alt="Coding Allies Logo" />
          <Typography align="center">
            &copy; Coding Allies {new Date().getFullYear()}
            {"."}
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={4}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <text>Follow us on:</text>
          <Link href="https://www.facebook.com/groups/713361402552708">
            <FacebookIcon
              style={{
                padding: "3px",
                border: "solid 1px",
                borderRadius: "50%",
                marginInline: 5,
                fill: "primary",
              }}
            />
          </Link>
          <Link href="https://twitter.com/codingallies?lang=en">
            <TwitterIcon
              style={{
                padding: "3px",
                border: "solid 1px",
                borderRadius: "50%",
                marginInline: 5,
                fill: "primary",
              }}
            />
          </Link>
          <Link href="https://www.instagram.com/codingallies/">
            <InstagramIcon
              style={{
                padding: "3px",
                border: "solid 1px",
                borderRadius: "50%",
                marginInline: 5,
                fill: "primary",
              }}
            />
          </Link>
          <Link href="https://www.linkedin.com/company/coding-allies/">
            <LinkedInIcon
              style={{
                padding: "3px",
                border: "solid 1px",
                borderRadius: "50%",
                marginInline: 5,
                fill: "primary",
              }}
            />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
