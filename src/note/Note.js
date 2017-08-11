import React from 'react';
import { Input, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { updateBodyNote } from './Actions';
import { updateTitleNote } from './Actions';
// Needed for a commented array search function
// import _ from 'lodash';

export class RenderNoteBody extends React.Component {
  render() {
    const { selectedNoteId, notes } = this.props;

    if (selectedNoteId === -1) { return (<div>You know Nothing</div>); }
    // Find the real spot in the array with this
    // const cur = _.findIndex(notes, note => note.id === selectedNoteId)
    const current = notes[selectedNoteId - 1];
    return (
      <div>
        <Row>
          <Col span={20} offset={2}>
            <h1>
              <Input.TextArea value={current.title} onChange={({ target: { value: newTitle } }) => this.props.onTitleUpdate(selectedNoteId, newTitle)} />
            </h1>
          </Col>
        </Row>
        <Row style={{ marginTop: 35, textAlign: 'justify' }}>
          <Col span={20} offset={2}>
            <p>
              <Input.TextArea value={current.body} onChange={({ target: { value: newBody } }) => this.props.onBodyUpdate(selectedNoteId, newBody)} />
            </p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: 'right' }}>
            YOLO
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedNoteId: state.NoteReducer.selectedNoteId,
    notes: state.NoteReducer.notes,
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
  };
}

export const NoteBody = connect(mapStateToProps, mapDispatchToProps)(RenderNoteBody);
export default NoteBody;
