import React, { Component } from 'react';
import { Layout } from 'antd';
import './../App.css';
import MainPane from './../layout/MainPane';
import Menus from './../layout/Menus';
import Note from './../note/Note';
import fetch from 'isomorphic-fetch';

class App extends Component {
  getReddit() {
    let stuff = fetch('https://playoverwatch.com/en-gb/career/pc/eu/Ratouney-2516')
    .then(response => response.json())
    console.log(stuff)
  }

  render() {
    this.getReddit()
    return (
      <Layout>
        <Menus />

        <MainPane>
          <Note />
        </MainPane>

      </Layout>
    );
  }
}

export default App;
