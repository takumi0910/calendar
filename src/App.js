import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Modal from "./components/CalendarParts/Modal"
import Login from './components/login/Login';
import Auth from './components/login/Auth';
import Nav from './components/CalendarParts/Nav'
import SignUp from './components/login/SignUp';
import MainCalendar from './components/Calendar'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Auth>
          <Nav />
          <MainCalendar/>
        </Auth>
      </Switch>
    </BrowserRouter>
    );
  }
}