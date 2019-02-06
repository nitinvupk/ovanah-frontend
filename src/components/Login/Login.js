import React from "react";
import { Paper, withStyles, Grid, TextField, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: theme.spacing.unit
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.token !== nextProps.token) {
      window.localStorage.setItem('token',nextProps.token);
      this.props.history.push('user');
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit() {
    const username = this.state.username;
    this.props.LoginUser(username);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>Login</Toolbar>
        </AppBar>
        <Paper className={classes.padding}>
          <div className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item />
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="username"
                  label="Username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={(e) => this.handleChange(e)}
                  fullWidth
                  autoFocus
                  required
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item />
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  password="password"
                  value={this.props.password}
                  onChange={(e) => this.handleChange(e)}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>

            <Grid container justify="center" style={{ marginTop: "10px" }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ textTransform: "none" }}
                onClick={() => this.onSubmit()}
              >
                Login
              </Button>
            </Grid>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
