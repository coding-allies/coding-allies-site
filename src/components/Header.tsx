import {
  Link
} from "react-router-dom";
import { AppBar, Container, Toolbar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/ca_logo.png"

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      position: 'absolute',
      width: '1520px',
      height: '180px',
      left: '0px',
      top: '0px',
      background: '#FFFFFF'
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    display:'flex',
    justifyContent: 'space-between'
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  logo: {
    width: '100px',
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 4.5),
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
        <Link
          to="/"
          className={classes.link}
        >
          <img src={logo} className={classes.logo} alt="Coding Allies Logo" />
        </Link>
        {/* <nav>
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
        </nav> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;