import {combineReducers} from 'redux';
import ShowAllTasks from './ShowAllTasks';
import FindUsers from './FindUsers';
import Login from './Login';
import ShowLogin from './ShowLogin';
import Register from './Register';
import UserCenter from './UserCenter';
import UserInfo from './UserInfo';
import verifiedUserMessage from './verifiedUserMessage';
import addTaskRedirected from './addTaskRedirected';
import StrangerUserCenter from './StrangerUserCenter';
import AttentionUser from './AttentionUser';
import UserAttention from './UserAttention';
import DetailTask from './DetailTask';
import ShowComment from './ShowComment';
import nav from './Nav';

export default combineReducers({
  ShowAllTasks,
  FindUsers,
  Login,
  ShowLogin,
  Register,
  UserCenter,
  UserInfo,
  verifiedUserMessage,
  addTaskRedirected,
  StrangerUserCenter,
  AttentionUser,
  UserAttention,
  DetailTask,
  ShowComment,
  nav
});

