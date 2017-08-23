import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import NoteList from './../notelist';
import TopMenu from './../topmenu';
import Editor from './../editor';

const { Sider } = Layout;

const RenderMainPage = function MainPage(props) {
  return (
    <Layout>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <TopMenu />
        {
          props.categories.map((categ) => {
            return (
              <NoteList
                key={categ}
                listName={categ}
                notes={props.notes.filter((note) => { return (note.category === categ); })}
              />);
          })
        }
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Editor />
      </Layout>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    notes:      state.NoteListReducer.notes,
    categories: state.NoteListReducer.categories,
  };
}

const MainPage = connect(mapStateToProps)(RenderMainPage);

export default MainPage;
