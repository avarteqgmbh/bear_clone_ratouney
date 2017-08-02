import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Input} from 'antd';
import { Row, Col } from 'antd';
import { connect } from 'react-redux' ;
// eslint-disable-next-line
import { Provider } from 'react-redux' ;
import { selectNote } from './Actions.js' ;
import { PropTypes } from 'prop-types';
const Search = Input.Search;

const note_items = [
  {key: '1', title: "Hello", content: "HELLO THIS IS MY LIFE"},
  {key: '2', title: "World", content: "The world is great"},
  {key: '3', title: "Give", content: "Never gonna give you up"},
  {key: '4', title: "Let", content: "Never gonna let you down"},
  {key: '5', title: "Run", content: "Never gonna run around"},
  {key: '6', title: "Make", content: "Never gonna make you cry"},
  {key: '7', title: "Say", content: "Never gonna say goodbye"},
  {key: '8', title: "Tell", content: "Never gonna tell a lie"},
  {key: '9', title: "Hurt", content: "or hurt you..."},
]

export class NotesList extends Component {
  render() {
    return <div>
      {console.log("Notelist : ", this.props.onNoteClick)}
      <Menu theme="light" mode="inline" onClick={() => this.props.onNoteClick()} >
        <Row>
          <Col span={2}>
          </Col>
          <Col span={16} >
            <Search
              placeholder="Search"
            />
          </Col> 
          <Col span={1}>
          </Col>
          <Col span={5} >
          <Button type="primary" shape="circle" icon="plus"/>
          </Col> 
        </Row>
      {note_items.map((item) =>
        <Menu.Item key={item.key}>
          <Icon/>
          <span className="nav-text" style={{ fontWeight: 'bold', fontSize: '15px' }} >{item.title}</span>
        </Menu.Item>
      )}
      </Menu>
      </div>
  }
}

NotesList.propTypes = {
  onNoteClick: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    note: state.note,
    full: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onNoteClick: id => {
      dispatch(selectNote(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);