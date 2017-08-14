import React, { Component } from 'react';
import './../App.css';
import NoteMenu from './../panels/NoteMenu';
import LoginScreen from './../panels/LoginScreen';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/auth">
          <LoginScreen />
        </Route>
        <Route>
          <NoteMenu />
        </Route>
      </Switch>
    );
  }
}

export default App;
