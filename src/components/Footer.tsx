import { Button, Grid, Input, Container, Typography, Link, Icon, Paper, CardMedia } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/ca_single_flower_logo.png"

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

function ButtonStyled() {
	const classes = useStyles();
	return <Button className={classes.footer}>
		Test Styled Button
	</Button>
}

function Footer() {
  const classes = useStyles();
  return (
    <Container component="footer" className={classes.footer}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <text>
            Sign up for event updates
					</text>
          <div>
            <input
              type="email"
              placeholder="Email address"
              color="primary"
              style={{ borderRadius: 15 }}>
            </input>
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ borderRadius: 15 }}>
              Sign up
						</Button>
          </div>
        </Grid>
        <Grid item xs={4}>
          <img src={logo} width={50} alt="Coding Allies Logo" />
          <Typography align="center">
            &copy; Coding Allies {new Date().getFullYear()}{"."}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <text>
            Follow us on:
					</text>
          <Link href="#" color="primary" variant="subtitle1">
            Facebook
					</Link>
          <Link href="#" onClick={preventDefault} variant="subtitle1">
            Twitter
					</Link>
          <Link href="#" variant="subtitle1">
            Insta
					</Link>
          <Link href="#" variant="subtitle1">
            LinkedIn
					</Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
