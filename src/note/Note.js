import React from 'react';
import { Input, Row, Col, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { updateBodyNote } from './Actions';
import { updateTitleNote } from './Actions';
import MessageBox from './../layout/MessageBox'
import _ from 'lodash';

export class RenderNoteBody extends React.Component {
  uploadSuccess(note) {
    let title = note.title;
    MessageBox("Senpai, notice me", 'Note "' + title + '" has been updated', "forward", { color: 'blue'})
  }
  
  uploadFailure(note) {
    let title = note.title;
    MessageBox("Senpai, notice me", 'Note "' + title + '" failed to update', "cross", { color: 'red'})
  }

  onClickUpload(note) {
    let new_format = { note: {title: note.title, id: note.id, body: note.body}}
    let body = JSON.stringify(new_format)
    let adress = process.env.REACT_APP_API_URL + '/notes/' + note.id
    let headers = { 'Content-Type': 'application/json' }
    const params = {
      method: 'PUT',
      headers,
      body
    }
    fetch(adress, params)
    .then(
      response => this.uploadSuccess(note),
      error => this.uploadFailure(note),
    )
  }

  render() {
    const { selectedNoteId, notes } = this.props;

    if (selectedNoteId === -1) { return (<div>You know Nothing</div>); }
    // Find the real spot in the array with this
    const cur = _.findIndex(notes, note => note.id === selectedNoteId)
    const current = notes[cur];
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
          <Col>
          <br />
          </Col>
          <Col style={{ textAlign: 'right' }} offset={19} span={2} >
            <Button onClick={() => this.onClickUpload(current)} ><Icon type="cloud" />Upload to Server</Button>
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
