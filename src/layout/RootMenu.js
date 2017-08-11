import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Icon, Layout, Spin } from 'antd';

const { Sider } = Layout;
const { ItemGroup } = Menu;
const MENU_TITLE = 'Tags';

const itemGroupTitle = function itemGroupTitle(title) {
  return (
    <div>
      <Icon type="tags" style={{ fontSize: 14 }} />
      <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{title}</span>
    </div>
  );
};

const RenderRootMenu = (props) => (
  <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, width: '120px' }}>
      {props.fetchingNotes === true
        ? <Spin style={{ background: 'yellow'}} >Fetching</Spin>
        : ''
      }
    <Menu theme="dark" mode="inline">
      {props.items.map((item) => (
        <Menu.Item key={item.key}>
          <Link to={item.note_category} onClick={() => console.log('CLICKED GOTO : ', item.note_category)} >
            <Icon type={item.icon} />
            <span className="nav-text">{item.title}</span>
          </Link>
        </Menu.Item>
      ),
      )}

      <Menu.Divider />

      <ItemGroup key="3" title={itemGroupTitle(MENU_TITLE)}>
        {props.tags.map((tag, i) =>
          (<Menu.Item key={i + 4}>
            <Icon type="tag-o" />
            <span className="nav-text">{tag}</span>
          </Menu.Item>),
        )}
      </ItemGroup>
    </Menu>
  </Sider>
);

const mapStateToProps = (state) => {
  return {
    fetchingNotes: state.NoteReducer.fetchingNotes,
  }
}


const RootMenu = connect(mapStateToProps)(RenderRootMenu);

export default RootMenu;
