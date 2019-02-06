import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { LoginUser } from '../actions';

const mapStateToProps = state => ({
  username: state.user.username,
  password: state.user.password,
  token: state.user.token
});

const mapDispatchToProps = {
  LoginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
