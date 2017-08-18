import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import _ from 'lodash';

const { Content } = Layout;

const RenderEditor = function RenderEditor(props)  {
    return (
        <div>
            <Content style={{ margin: '16px', overflow: 'initial' }}>
                <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                    hello bitches
                    </div>
            </Content>
        </div>
    );
}

function mapStateToProps(state) {
    console.log('MapStateToProps - ', state)
    _.findIndex(state.NoteListReducer.notes, )
    return {
        current: 42,
    };
}

const Editor = connect(mapStateToProps)(RenderEditor);

export default Editor;