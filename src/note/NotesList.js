import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Input} from 'antd';
import { Row, Col } from 'antd';
import { connect } from 'react-redux' ;
// eslint-disable-next-line
import { Provider } from 'react-redux' ;
import { selectNote } from './Actions.js' ;
const Search = Input.Search;

export class NotesList extends Component {


  handleAddClick() {
    console.log("You clicked on da button")
  }

  handleSearchClick() {
    console.log("You clicked on da searchbar")
  }

  render() {
    return <div>
      <Menu theme="light" mode="inline" onClick={(id) => this.props.onNoteClick(id)} >
        <Row>
          <Col span={2}>
          </Col>
          <Col span={16} >
            <Search
              placeholder="Search"
              onClick={ this.handleSearchClick }
              onSearch={ value => console.log("You typed : ", value)}
            />
          </Col> 
          <Col span={1}>
          </Col>
          <Col span={5} >
          <Button type="primary" shape="circle" icon="plus" onClick={ this.handleAddClick } />
          </Col> 
        </Row>
      {this.props.notes.map((item) =>
        <Menu.Item key={item.key}>
          <Icon/>
          <span className="nav-text" style={{ fontWeight: 'bold', fontSize: '15px' }} >{item.title}</span>
        </Menu.Item>
      )}
      </Menu>
      </div>
  }
}

function mapStateToProps(state) {
  return {
    note: state.note,
    notes: state.notes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onNoteClick: id => {
      dispatch(selectNote(id.key))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);