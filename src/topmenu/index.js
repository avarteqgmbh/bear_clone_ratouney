import React from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { syncNotes } from './Actions';

const { SubMenu } = Menu;

const TopMenuDispatcher = function TopMenuDispatcher(event, onNoteSync) {
  console.log('Recieved event : ', event);
  if (event.key === "3") {
    onNoteSync();
  }
};

const RenderTopMenu = function TopMenu({ onNoteSync, api_fetching }) {
  return (
    <Menu theme="dark" mode="inline" onClick={(event) => { TopMenuDispatcher(event, onNoteSync); }} >
      <SubMenu
        key="sub1"
        title={
          <span>
            <img
              alt="example"
              width="25%"
              src='http://icons.iconarchive.com/icons/iconsmind/outline/512/Bear-icon.png'
            />
            <span className="nav-text" style={{ fontSize: '16px' }} >BearClone</span>
          </span>
        }
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Server Status</Menu.Item>
        <Menu.Item key="3" loading={api_fetching} >Note Sync</Menu.Item>
      </SubMenu>
      <Menu.Divider />
    </Menu>
  )
}

function mapStateToProps(state) {
  return {
    api_fetching: state.NoteListReducer.api_fetching,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onNoteSync: () => {
      dispatch(syncNotes());
    },
  };
};

const TopMenu = connect(mapStateToProps, mapDispatchToProps)(RenderTopMenu);

export default TopMenu;
