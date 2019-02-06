import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import NoRecord from "./noRecord";
import {
  CardContent,
  Button,
  Typography,
  AppBar,
  Toolbar,
  CardMedia,
  List,
  ListItem,
  Paper
} from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";

const styles = theme => ({
  pos: {
    marginBottom: 12
  },
  card: {
    minWidth: 275
  },
  media: {
    width: 100
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    right:0,
    top: 63,
    borderWidth: 1,
    borderColor: "#d8d8d8",
    borderStyle: "solid"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  button: {
    margin: theme.spacing.unit
  },
  Margin: {
    margin: 0
  },
  ListData: {
    position: 'absolute',
    right: 0,
    top: "64px",
  },
  inline: {
    cursor: "pointer"
  }
});

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      show: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchRecord = this.handleSearchRecord.bind(this);
  }

  async componentWillReceiveProps(nextProps) {
    if (this.props.city !== nextProps.city) {
      await this.props.getWeatherLocation(nextProps.city);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSearch() {
    const location = this.state.location;
    if(location) {
    this.props.getSearchLocation(location);
    this.setState({show: true});
  } return;
  }

  handleSearchRecord(woeid) {
    this.props.getSearchLocationDetails(woeid);
    this.setState({show: false});
  }

  componentDidMount() {
    this.props.getUserLocation();
  }

  render() {
    const { classes } = this.props;
      return (
        <>
          <AppBar position="static">
            <Toolbar>
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                Weather Information
              </Typography>

              <>
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon} />
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  name="location"
                  id="location"
                  value={this.state.location}
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => this.handleSearch()}
              >
                {" "}
                Search{" "}
              </Button>
              </>
            </Toolbar>
            {this.state.show &&
            <List className={classes.root}>
              {this.props.searchForcast.map((s, index) => (
                <ListItem>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                    onClick={() => this.handleSearchRecord(s.woeid)}
                  >
                    {s.title}
                  </Typography>
                </ListItem>
              ))}
            </List> }
          </AppBar>

          <br />
          {this.props.isLoading ? <Loader type="Puff" color="#00BFFF" height="100" width="100" /> :
          <div className="mdl-grid">
            {this.props.weatherForcast &&
            this.props.weatherForcast !== "undefind" ? (
              this.props.weatherForcast.consolidated_weather &&
              this.props.weatherForcast.consolidated_weather.map((n, index) => (
                <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone">
                  <Paper className={classes.paper}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      className={classes.media}
                      height="140"
                      image={`https://www.metaweather.com/static/img/weather/png/64/${
                        n.weather_state_abbr
                      }.png`}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color=""
                        variant="h6"
                        gutterBottom
                      >
                        {this.props.weatherForcast.title}
                      </Typography>

                      <Typography className={classes.pos} color="">
                        Air Pressure: {n.air_pressure} <br />
                        Applicable Date: {n.applicable_date} <br />
                        Humidity: {n.humidity} <br />
                        ID: {n.id} <br />
                        Max Temp: {n.max_temp} <br />
                        Min Temp: {n.min_temp} <br />
                        Predictability: {n.predictability} <br />
                        Visibility: {n.visibility} <br />
                        Weather State Abbr: {n.weather_state_abbr} <br />
                        Weather State Name: {n.weather_state_name} <br />
                        Wind Direction: {n.wind_direction} <br />
                        Wind Direction Compass: {n.wind_direction_compass}{" "}
                        <br />
                        Wind Speed: {n.wind_speed}
                      </Typography>
                    </CardContent>
                  </Paper>
                </div>
              ))
            ) : (
              <NoRecord />
            )}
          </div>}
        </>
      );
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(User);
