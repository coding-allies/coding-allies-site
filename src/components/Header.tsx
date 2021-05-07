import {
  Link
} from "react-router-dom";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.primary.main,
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link
            to="/"
            className={classes.link}
          >
            CODING ALLIES WEBSITE
         </Link>
        </Typography>
        <nav>
          <Link
            to="/about"
            className={classes.link}
          >
            ABOUT US
         </Link>
          <Link
            to="/events"
            className={classes.link}
          >
            CALENDAR
         </Link>
          <Link
            to="/companies"
            className={classes.link}
          >
            FOR COMPANIES
         </Link>
          <Link
            to="/comunity"
            className={classes.link}
          >
            FOR DSA ATTENDEES
         </Link>
          <Link
            to="/contact"
            className={classes.link}
          >
            CONTACT US
         </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;