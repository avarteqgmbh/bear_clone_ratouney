import React, { Component } from 'react';
import { Layout} from 'antd';
import './../App.css';
import RootMenu from './../Layout/menu.js';
import NoteContent from './../Layout/note_content.js';
import NoteList from './../Layout/note_list.js';
const { Sider } = Layout;

const RootMenuItems = [
  {key: 1, title: "General", icon: "upload"},
  {key: 2, title: "Trash", icon: "delete"},
]

const RootMenuTags = [
  "Learning",
  "React",
  "Is basically",
  "learning JS"
]

const NoteListItems = [
  {title: "Hello", content: "HELLO THIS IS MY LIFE"},
  {title: "World", content: "The world is great"},
  {title: "Give", content: "Never gonna give you up"},
  {title: "Let", content: "Never gonna let you down"},
  {title: "Run", content: "Never gonna run around"},
  {title: "Make", content: "Never gonna make you cry"},
  {title: "Say", content: "Never gonna say goodbye"},
  {title: "Tell", content: "Never gonna tell a lie"},
  {title: "Hurt", content: "or hurt you..."},
]

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, width: '120px' }}>
          <RootMenu items={RootMenuItems} tags={RootMenuTags} />
        </Sider>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 120, backgroundColor: '#fff' }}>
          <NoteList items={NoteListItems}/>
        </Sider>
    <Layout style={{ marginLeft: 320 }}>
      <NoteContent />
    </Layout>
  </Layout>
    );
  }
}

export default App;
