/* eslint-disable no-unused-vars */
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
import Start from './startScreen';
import Name from './nameScreen';
import GameCode from './codeScreen';
import WaitingRoom from './waitingRoom';

const StartGame = () => {
  console.log('hello');
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <Router>
      <div className="mh-company-dashboard">
        <section className="tb-start__body">
          <Switch>
            <Route exact path="/" component={Start}>
              <Redirect to="/start" />
            </Route>
            <Route path="/start" component={Start} />
            <Route path="/name" component={Name} />
            <Route path="/code" component={GameCode} />
            <Route path="/room" component={WaitingRoom} />
          </Switch>
        </section>
      </div>
    </Router>
  );
};

export default StartGame;
