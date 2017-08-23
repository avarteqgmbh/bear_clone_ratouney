import React from 'react';
import { connect } from 'react-redux';
import { Layout, Input, Select, Row, Col } from 'antd';
import _ from 'lodash';
import { updateTitle, updateBody, changeCategory } from './Actions';

const { Content } = Layout;

const RenderEditor = function RenderEditor({ current, selected, categories, onTitleUpdate,
                                             onBodyUpdate, onChangeCategory,
                                          }) {
  return (
    <div>
      <Content style={{ margin: '16px', overflow: 'initial' }}>
        <div style={{ padding: 16, textAlign: 'center' }}>
          {current === undefined
            ?
              <h1>Select a Note</h1>
            :
              <div>
                <Row>
                  <Col span={16} >
                    <Input value={current.title} onChange={(e) => { onTitleUpdate(selected, e.target.value); }} />
                  </Col>
                  <Col span={6} >
                    <Select defaultValue={current.category} onChange={(e) => { onChangeCategory(selected, e); }} >
                      {
                        categories.map((categ) => {
                           return (<Select.Option key={categ} value={categ}>{categ}</Select.Option>);
                        })}
                    </Select>
                  </Col>
                </Row>
                <br />
                <Input.TextArea value={current.body} onChange={(e) => { onBodyUpdate(selected, e.target.value); }} />
                <br />
              </div>
          }
        </div>
      </Content>
    </div>
  );
};

function mapStateToProps(state) {
  const current = _.findIndex(state.NoteListReducer.notes,
    (note) => { return (note.id === Number(state.NoteListReducer.selected)); });
  return {
    selected:   state.NoteListReducer.selected,
    current:    state.NoteListReducer.notes[current],
    categories: state.NoteListReducer.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTitleUpdate: (id, title) => {
      dispatch(updateTitle(id, title));
    },
    onBodyUpdate: (id, body) => {
      dispatch(updateBody(id, body));
    },
    onChangeCategory: (id, category) => {
      dispatch(changeCategory(id, category));
    },
  };
}

const Editor = connect(mapStateToProps, mapDispatchToProps)(RenderEditor);

export default Editor;
