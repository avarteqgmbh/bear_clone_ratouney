import React, { Component } from 'react';
import { Layout} from 'antd';
import './../App.css';
import RootMenu from './../layout/RootMenu.js';
import { NoteBody } from './../note/Note.js';
import { NotesList } from './../note/NotesList.js';
const { Sider } = Layout;

const RootMenuItems = [
  {key: 1, title: "General", icon: "apple"},
  {key: 2, title: "Trash", icon: "delete"},
]

const RootMenuTags = [
  "Learning",
  "React",
  "Is basically",
  "learning JS"
]

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, width: '120px' }}>
          <RootMenu items={RootMenuItems} tags={RootMenuTags} />
        </Sider>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 120, backgroundColor: '#fff' }}>
          {/* <NotesList items={NoteListItems}/> */}
          <NotesList/>
        </Sider>
    <Layout style={{ marginLeft: 320 }}>
      <NoteBody />
    </Layout>
  </Layout>
    );
  }
}

export default App;
