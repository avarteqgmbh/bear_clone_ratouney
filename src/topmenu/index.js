import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const RenderTopMenu = function TopMenu(props) {
    return (
        <Menu theme="dark" mode="inline" >
            <SubMenu
                key="sub1"
                title=
                {
                    <span>
                        <img alt="example" width="25%" src='http://icons.iconarchive.com/icons/iconsmind/outline/512/Bear-icon.png' />
                        <span className="nav-text" style={{ fontSize: '16px' }} >BearClone</span>
                    </span>
                }
            >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Server Status</Menu.Item>
                <Menu.Item key="3">Note Sync</Menu.Item>
            </SubMenu>
            <Menu.Divider />
        </Menu>
    )
}

const TopMenu = RenderTopMenu;

export default TopMenu;