import React, { Component } from 'react';
import { Layout, Row, Col, Input, Button } from 'antd';
import NotesList from './../note/NotesList';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { selectNote, addNote, enterNote, exitNote, trashNote } from './../note/Actions';

const { Sider } = Layout;
const { Search } = Input;

const Header = ({ onAddNote }) => (
  <Row style={{ marginTop: '11px' }}>
    <Col span={16} offset={2}>
      <Search
        placeholder="Search"
        onSearch={(value) => console.log('You typed : ', value)}
      />
    </Col>
    <Col span={5} offset={1}>
      <Button type="primary" shape="circle" icon="plus" onClick={() => onAddNote()} />
    </Col>
  </Row>
);

const allNotes = () => {
  console.log("DISPLAY ALL NOTES")
}

const trashedNotes = () => {
  console.log("DISPLAY TRASHED NOTES")
}

class BuildSubMenu extends Component {
  render() {
    const { notes, hover, onSelectNote, onAddNote, onEnterNote, onExitNote, onTrashNote, selected } = this.props;
    const general = notes.filter((note) => note.status === 'GENERAL');
    const trash = notes.filter((note) => note.status === 'TRASH');
    return (
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 120, backgroundColor: '#fff' }}>
        <Header onAddNote={onAddNote} />
        <NotesList notes={notes} hover={hover} selected={selected} onNoteClick={onSelectNote} onEnterNote={onEnterNote} onExitNote={onExitNote} onTrashNote={onTrashNote} />
       {/*
        <Switch>
          <Route path='/' component={allNotes} />
          <Route path='/trash' component={trashedNotes} />
        </Switch>
       */}
      </Sider>
    );
  }
}

const mapStateToProps = (state) => ({
  notes: state.NoteReducer.notes,
  hover: state.NoteReducer.overNoteId,
  selected: state.NoteReducer.selectedNoteId,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectNote: (id) => { dispatch(selectNote(Number(id))); },
  onAddNote: () => { dispatch(addNote()); },
  onEnterNote: (id) => { dispatch(enterNote(Number(id))); },
  onExitNote: (id) => { dispatch(exitNote(Number(id))); },
  onTrashNote: (id) => { dispatch(trashNote(Number(id))); },
});

const SubMenu = connect(mapStateToProps, mapDispatchToProps)(BuildSubMenu);
export default SubMenu;
