
import React from 'react';
import { Menu, Col, Button } from 'antd';

const NotesList = function NotesList({ notes, hover, selected, onNoteClick, onExitNote, onEnterNote, onTrashNote, onRestoreNote }) {
  return (
    <Menu theme="light" mode="inline" >
      {notes.map((note) =>
        (<Menu.Item key={note.id} onMouseEnter={() => onEnterNote(note.id)} onMouseLeave={() => onExitNote(note.id)} >
          <Col span={20} onClick={() => onNoteClick(note.id)}>
            <span className="nav-text" style={{ fontWeight: 'bold', fontSize: '15px' }} >
              {note.title}
            </span>
          </Col>
          <Col offset={1} span={2}>
            {note.status === 'TRASH'
              ? note.id === hover
                ? <Button icon="rollback" type="danger" onClick={() => onRestoreNote(note.id)} />
                : ''
              : note.id === hover
                ? note.id === selected
                  ? <Button icon="delete" type="danger" disabled />
                  : <Button icon="delete" type="danger" onClick={() => onTrashNote(note.id)} />
                : ''
            }

          </Col>
        </Menu.Item>),
      )}
    </Menu>
  );
};

export default NotesList;
