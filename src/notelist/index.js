import React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { selectNote, addNote } from './Actions';

const DispatchSelector = function DispatchSelector(func_select, func_add, info) {
    if (info.key === 'add_note') {
        console.log('Add note to category : ', info.keyPath[1])
        func_add(info.keyPath[1])
    } else {
        func_select(info.key)
    }
}

const RenderNoteList = function RenderNoteList({onClickNote, onAddNote, listName, notes}) {
    return (
        <Menu theme="dark" mode="inline" onClick={(e) => DispatchSelector(onClickNote, onAddNote, e)} >
            <Menu.SubMenu key={listName} title={<span className="nav-text" style={{ fontSize: '16px' }} >{listName}</span>} >
            {notes.map((note) => (
                <Menu.Item key={note.id} >{note.title}</Menu.Item>
            ))}
            <Menu.Item key={"add_note"}><Icon type="plus-square"/><span style={{ color: 'green' }}> New Note</span></Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        onClickNote: (id) => {
            dispatch(selectNote(id))
        },
        onAddNote: (categ) => {
            dispatch(addNote(categ))
        },
    }
}

const NoteList = connect(null, mapDispatchToProps)(RenderNoteList);

export default NoteList;