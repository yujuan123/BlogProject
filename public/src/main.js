import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import FindAllUsers from './middlewares/FindUsers';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/index.js';
import Show from './containers/ShowAllTasks.js';
import AddTask from './middlewares/AddTask';
import ShowAllTasks from './middlewares/ShowAllTasks';
import register from './middlewares/Register';
import ShowLoginRegister from './containers/ShowLoginRegister'
import ShowStrangerCenter from './containers/ShowStrangerCenter';
import userCenter from './middlewares/UserCenter';
import UserCenter from './containers/UserCenter';
import LoadStrangerInfo from './middlewares/StrangerUserCenter';
import  thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import DeleteTask from './middlewares/DeleteTask';
import App from './components/App';
import DetailTask from './containers/DetailTask';
import detailTask from './middlewares/DetailTask';
import ShowComment from './middlewares/ShowComment';
import Nav from './middlewares/Nav';

const Middleware = applyMiddleware(thunkMiddleware, createLogger(), AddTask, DeleteTask, ShowAllTasks, FindAllUsers, register, userCenter, LoadStrangerInfo, detailTask, ShowComment,Nav);
let store = createStore(reducer, Middleware);

ReactDom.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Show}/>
          <Route path="/show" component={ShowLoginRegister}/>
          <Route path="/userCenter" component={UserCenter}/>
          <Route path="/strangerInfo/:username" component={ShowStrangerCenter}/>
          <Route path="/detailTask/:_id" component={DetailTask}/>
        </Route>
      </Router>
    </Provider>
    , document.getElementById('root'));