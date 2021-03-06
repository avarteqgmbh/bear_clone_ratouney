import React, { Component } from 'react';
import { Layout, Row, Col, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import NotesList from './../note/NotesList';
import { selectNote, addNote, enterNote, exitNote, trashNote, restoreNote } from './../note/Actions';

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

class BuildSubMenu extends Component {
  eslintdoesntlikeclasses() {
  }

  render() {
    const { notes, hover, onSelectNote, onAddNote,
      onEnterNote, onExitNote, onTrashNote,
      selected, onRestoreNote,
    } = this.props;
    const trash = notes.filter((note) => note.status === 'TRASH');
    const general = notes.filter((note) => note.status === 'GENERAL');
    return (
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 120, backgroundColor: '#fff' }}>
        <Header onAddNote={onAddNote} />
        <Switch>
          <Route exact path="/">
            <NotesList
              hover={hover}
              notes={general}
              onEnterNote={onEnterNote}
              onExitNote={onExitNote}
              onNoteClick={onSelectNote}
              onRestoreNote={onRestoreNote}
              onTrashNote={onTrashNote}
              selected={selected}
            />
          </Route>
          <Route exact path="/trash">
            <NotesList
              hover={hover}
              notes={trash}
              onEnterNote={onEnterNote}
              onExitNote={onExitNote}
              onNoteClick={onSelectNote}
              onRestoreNote={onRestoreNote}
              onTrashNote={onTrashNote}
              selected={selected}
            />
          </Route>
          <Route>
            <div>You cannot find it, huh ? Me neither..</div>
          </Route>
        </Switch>
      </Sider>
    );
  }
}

const mapStateToProps = (state) => ({
  notes:    state.NoteReducer.notes,
  hover:    state.NoteReducer.overNoteId,
  selected: state.NoteReducer.selectedNoteId,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectNote:  (id) => { dispatch(selectNote(Number(id))); },
  onAddNote:     () => { dispatch(addNote()); },
  onEnterNote:   (id) => { dispatch(enterNote(Number(id))); },
  onExitNote:    (id) => { dispatch(exitNote(Number(id))); },
  onTrashNote:   (id) => { dispatch(trashNote(Number(id))); },
  onRestoreNote: (id) => { dispatch(restoreNote(Number(id))); },
});

const SubMenu = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(BuildSubMenu);
export default SubMenu;
