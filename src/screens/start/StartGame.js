import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeToken, removeUser } from '../../actions';

const StartGame = () => (
    <h1>Hello World</h1> // TODO
);

export default StartGame;
