import { Component } from "react";
import {
  Grid,
  Button,
  Typography,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import whiteBackground from "../assets/MainPageImage.png";
import DataStructureAndAlgorithms from "../components/DataStructureAndAlgorithms";
import CodingAlliesOpenSource from "../components/CodingAlliesOpenSource";
import DiscordCommunity from "../components/DiscordCommunity";

const styles = {
  paperContainer: {
    backgroundImage: `url(${whiteBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: `calc(100vw + 48px)`,
    height: `calc(40vw + 48px)`,
  },
  mainGrid: {
    marginTop: "calc(10vw)",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "rgba(255,255,255, 0.5)",
    borderRadius: "5px",
  },
  believe: {
    width: "calc(75vw)",
    margin: "40px auto 0 auto",
  },
};

const theme = createTheme({
  typography: {
    h4: {
      fontFamily: '"Montserrat"',
      fontSize: "1.2rem",
      "@media (min-width:800px)": {
        fontSize: "2.0rem",
      },
    },
    h5: {
      fontFamily: '"Montserrat"',
      fontSize: "1.0rem",
      "@media (min-width:800px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

class Home extends Component {
  render() {
    const handleClick = () => {
      window.open("https://www.facebook.com/groups/codingallies");
    };
    return (
      <Grid>
        <div>
          <Paper style={styles.paperContainer}>
            <Grid>
              <Grid
                container
                item
                xs={6}
                direction="column"
                alignItems="center"
              >
                <ThemeProvider theme={theme}>
                  <Typography variant="h4" style={styles.mainGrid}>
                    Women and gender
                    <br />
                    minorities in tech.
                    <br />
                    Empower. Prepare. <br />
                    Advance. Share.
                  </Typography>
                </ThemeProvider>
                <Button
                  onClick={handleClick}
                  href=""
                  variant="contained"
                  color="primary"
                >
                  Join Our FB Group Today
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          style={styles.believe}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h5">
              We believe women and gender minorities should have a safe space
              and support system where they can foster their skills and careers
              in tech. We celebrate allyship and a community that is based on
              helping each other grow and succeed.
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid container item xs={12} spacing={2} justifyContent="center">
          <DiscordCommunity />
          <CodingAlliesOpenSource />
          <DataStructureAndAlgorithms />
        </Grid>
      </Grid>
    );
  }
}
export default Home;
