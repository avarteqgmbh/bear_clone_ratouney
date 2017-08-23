import React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { selectNote, addNote, hoverNote, unhoverNote, remoteAddNote } from './Actions';

const DispatchSelector = function DispatchSelector(func_select, func_add, func_remote_add, info) {
  if (info.key === 'add_note') {
    console.log('Add note to category : ', info.keyPath[1]);
    func_add(info.keyPath[1]);
  } else if (info.key === 'remote_add_note') {
    func_remote_add(info.keyPath[1]);
  } else {
    func_select(info.key);
  }
};

const RenderNoteList = function RenderNoteList({ onClickNote, onAddNote, listName, notes, selected, onRemoteAdd }) {
  return (
    <Menu
      theme="dark"
      mode="inline"
      onClick={(e) => { DispatchSelector(onClickNote, onAddNote, onRemoteAdd, e); }}
      selectedKeys={[String(selected)]}
    >
      <Menu.SubMenu key={listName} title={<span className="nav-text" style={{ fontSize: '16px' }} >{listName}</span>} >
        {notes.map((note) => {
          return (<Menu.Item
            key={note.id}
            // onMouseEnter={({ key }) => { onHoverNote(key); }}
            // onMouseLeave={({ key }) => { onUnhoverNote(key); }}
          >
            {note.title}
          </Menu.Item>);
        })}
        <Menu.Item key={'add_note'}><Icon type="plus-square" />
          <span style={{ color: 'green' }}> New Note</span>
        </Menu.Item>
        <Menu.Item key={'remote_add_note'}>
          <Icon type="plus-square" /><span style={{ color: 'purple' }}> REMOTE NEW NOTE</span>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

function mapStateToProps(state) {
  return {
    selected: state.NoteListReducer.selected,
    hovering: state.NoteListReducer.hovering,
    hover:    state.NoteListReducer.hover,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickNote: (id) => {
      dispatch(selectNote(id));
    },
    onAddNote: (categ) => {
      dispatch(addNote(categ));
    },
    onHoverNote: (id) => {
      dispatch(hoverNote(id));
    },
    onUnhoverNote: (id) => {
      dispatch(unhoverNote(id));
    },
    onRemoteAdd: (category) => {
      dispatch(remoteAddNote(category));
    },
  };
}

const NoteList = connect(mapStateToProps, mapDispatchToProps)(RenderNoteList);

export default NoteList;
