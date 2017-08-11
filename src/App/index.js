import React, { Component } from 'react';
import { Layout } from 'antd';
import './../App.css';
import MainPane from './../layout/MainPane';
import Menus from './../layout/Menus';
import Note from './../note/Note';
import GetNotes from './../api/GetNotes';

class App extends Component {
  render() {
    return (
      <Layout>
        <GetNotes />
        <Menus />

        <MainPane>
          <Note />
        </MainPane>

      </Layout>
    );
  }
}

export default App;
