import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
import Login from './containers/user';
import User from './containers/userInfo';
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// const theme = createMuiTheme();

class App extends Component {
  render() {
    //
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => window.localStorage.getItem('token') ?
      <Component {...props}/> : <Redirect to='/'/>}
      />
    );

    return (
      <div>
      <Router history={history}>
        <Switch>
          <PrivateRoute path='/user' component={User}/>
          <Route exact path='/' component={Login}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
