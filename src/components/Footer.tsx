import { Grid, Container, Typography, Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

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

const Footer = () => {
	const classes = useStyles();
	return (
		<Container component="footer" className={classes.footer}>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Typography variant="h6" gutterBottom>
						CODING ALLIES TM
				</Typography>
				</Grid>
				<Grid item xs={2}>
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
		</Container>
	);
}

export default Footer;