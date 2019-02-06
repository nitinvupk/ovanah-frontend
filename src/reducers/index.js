import { combineReducers } from 'redux';
import userInfo from './userInfo';
import user from './user';

export default combineReducers({
    user,
    userInfo
})
