import React, { Component } from 'react';
import { Layout } from 'antd';
import Menus from './../layout/Menus';
import Note from './../note/Note';
import GetNotes from './../api/GetNotes';
import MainPane from './../layout/MainPane';

class NoteMenu extends Component {
    render() {
      return (
        <Layout>
        <GetNotes />
        <Menus />
  
        <MainPane>
          <Note />
        </MainPane>
  
      </Layout>
      )
    }
  }

  export default NoteMenu;