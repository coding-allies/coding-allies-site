import { Grid, Container, Typography, Link, AppBar, Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	footer: {
		paddingTop: theme.spacing(3),
		position: 'relative',
		left: 0,
		bottom: 0,
		height: '80px',
		width: '100%',
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<Box component="footer" color="default" className={classes.footer}>
			<Grid container spacing={2}>
				<Grid item xs={6} style={{marginLeft:'2%'}}>
					<Typography variant="h6" gutterBottom>
						CODING ALLIES TM
				</Typography>
				</Grid>
				<Grid item xs={3}>
					<Link href="#" variant="subtitle1">
						Facebook
				</Link>
				</Grid>
				<Grid item xs={2}>
					<Link href="#" variant="subtitle1">
						Insta
				</Link>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Footer;