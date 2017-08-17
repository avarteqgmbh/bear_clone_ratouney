import React from 'react';
import { Input, Row, Col, Button } from 'antd';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  updateBodyNote,
  updateTitleNote,
  uploadNote,
} from './Actions';
// Needed for a commented array search function

const RenderNoteBody = function RenderNoteBody(props) {
  const { selectedNoteId, notes, onBodyUpdate, onTitleUpdate, onPushUpload, upload_state } = props;

  if (selectedNoteId === -1) { return (<div>You know Nothing</div>); }
  // Find the real spot in the array with this
  const pos_in_arr = _.findIndex(notes, (note) => note.id === selectedNoteId);
  const current = notes[pos_in_arr];
  return (
    <div>
      <Row>
        <Col span={20} offset={2}>
          <h1>
            <Input.TextArea
              value={current.title}
              onChange={({ target: { value: newTitle } }) => onTitleUpdate(selectedNoteId, newTitle)}
            />
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: 35, textAlign: 'justify' }}>
        <Col span={20} offset={2}>
          <p>
            <Input.TextArea
              value={current.body}
              onChange={({ target: { value: newBody } }) => onBodyUpdate(selectedNoteId, newBody)}
            />
          </p>
        </Col>
      </Row>
      <Row style={{ marginTop: '15px' }} >
        <Col offset={17} >
          <Button type="primary" icon="cloud" onClick={() => onPushUpload(pos_in_arr)} loading={upload_state} >
            Upload to Server
          </Button>
        </Col>
      </Row>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedNoteId: state.NoteReducer.selectedNoteId,
    notes:          state.NoteReducer.notes,
    upload_state:   state.NoteReducer.api_uploading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onBodyUpdate: (note, body) => {
      dispatch(updateBodyNote(note, body));
    },
    onTitleUpdate: (note, body) => {
      dispatch(updateTitleNote(note, body));
    },
    onPushUpload: (note) => {
      dispatch(uploadNote(note));
    },
  };
}

export const NoteBody = connect(mapStateToProps, mapDispatchToProps)(RenderNoteBody);
export default NoteBody;
