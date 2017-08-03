import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
const { Content } = Layout ;

export class RenderNoteBody extends React.Component {
  constructor(props) {
    super(props);

    this.content = "Dong"
  }

  getContent() {
    if (typeof this.props.note === 'undefined')
      this.content = "You are in the search box, there is no note"
    else if (this.props.note === '-1')
      this.content = "No content"
    else
      this.content = this.props.notes[this.props.note - 1].content
  }
  
  render() {
    return <div>
      <Content style={{ margin: '24px 16px 24px', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center'}}>
          {this.getContent()}
          {this.content}
        </div>
      </Content>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    note: state.note,
    notes: state.notes
  }
}

export const NoteBody = connect(mapStateToProps)(RenderNoteBody);
export default NoteBody;