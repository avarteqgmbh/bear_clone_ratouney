import React from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { selectNote } from './Actions';

const RenderNoteList = function RenderNoteList({onClickNote, listName, notes}) {
    return (
        <Menu theme="dark" mode="inline" onClick={(e) => onClickNote(e.key)} >
            <Menu.SubMenu key={listName} title={<span className="nav-text" style={{ fontSize: '16px' }} >{listName}</span>} >
            {notes.map((note) => (
                <Menu.Item key={note.id} >{note.title}</Menu.Item>
            ))}
            </Menu.SubMenu>
        </Menu>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        onClickNote: (id) => {
            dispatch(selectNote(id))
        }
    }
}

const NoteList = connect(null, mapDispatchToProps)(RenderNoteList);

export default NoteList;