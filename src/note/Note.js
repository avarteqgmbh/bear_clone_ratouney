import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { selectNote } from './Actions.js'
const { Content } = Layout ;

export class NoteBody extends React.Component {
  handleChange() {
    console.log('Note boy has to update to show note :')
  }

  createListener() {
    console.log('Creating listener in note body')
  }
  
  render() {
    this.createListener()
    console.log('Props are : ', this.props)
    return <div>
      <Content style={{ margin: '24px 16px 24px', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center'}}>
          ...Stuff
        </div>
      </Content>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    note: state.note,
    full: state
  }
}

export default connect(mapStateToProps)(NoteBody);