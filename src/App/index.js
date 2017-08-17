import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import './../App.css';
import MainPane from './../layout/MainPane';
import Menus from './../layout/Menus';
import Note from './../note/Note';
import LoginForm from './../panels/LoginScreen';

class RenderApp extends React.Component {
  SHUTUPESLINT() {
  }

  render() {
    if (this.props.token === '') {
      return (
        <LoginForm />
      );
    }
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

function mapStateToProps(state) {
  return {
    token: state.SessionReducer.token,
  };
}

const App = connect(mapStateToProps)(RenderApp);

export default App;
