import React from 'react';
import { Layout, Input } from 'antd';
import { connect } from 'react-redux';
import { updateBodyNote } from './Actions';
import { updateTitleNote } from './Actions';
const { Content } = Layout ;

export class RenderNoteBody extends React.Component {
  constructor(props) {
    super(props);

    this.content = "Dong"
  };

  getContent() {
    if (typeof this.props.note === 'undefined')
      return "You are in the search box, there is no note"
    else if (this.props.note === -1)
      return "No content"
    else
      return this.content = this.props.notes[this.props.note - 1].content
  };

  getTitle() {
    if (typeof this.props.note === 'undefined')
      return "You are in the search box, there is no note"
    else if (this.props.note == -1)
      return "No content"
    else
      return this.title = this.props.notes[this.props.note - 1].title
  }

  handleChangeBody(e) {
    this.props.onBodyUpdate(this.props.note, e.target.value)
  };
 
  handleChangeTitle(e) {
    this.props.onTitleUpdate(this.props.note, e.target.value)
  };

  render() {
    return <div>
      <Content style={{ margin: '24px 16px 24px', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center'}}>
        {this.props.note === -1
          ? "Nothing"
          :
          <div>
          <Input.TextArea value={this.getTitle()} onChange={this.handleChangeTitle.bind(this)} />
          <Input.TextArea value={this.getContent()} onChange={this.handleChangeBody.bind(this)} />
          </div>
        }
        </div>
      </Content>
    </div>
  };
}

function mapStateToProps(state) {
  return {
    note: state.note,
    notes: state.notes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onBodyUpdate: (note, body) => {
      dispatch(updateBodyNote(note, body))
    },
    onTitleUpdate: (note, body) => {
      dispatch(updateTitleNote(note, body))
    }
  }
}

export const NoteBody = connect(mapStateToProps, mapDispatchToProps)(RenderNoteBody);
export default NoteBody;