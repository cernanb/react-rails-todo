import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory} from 'react-router'
import TodoList from './TodoList'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}/>
    <Route path='/todos' component={TodoList}/>

  </Router>,
  document.getElementById('root')
);
