import React from 'react';
import { Menu, Icon } from 'antd';
const MenuItemGroup = Menu.ItemGroup;

const RootMenu = ({items, tags}) => (
      <div>
      <Menu theme="dark" mode="inline">
      {items.map((item) =>
        <Menu.Item key={item.key}>
          <Icon type={item.icon} />
          <span className="nav-text">{item.title}</span>
        </Menu.Item>
      )}
      </Menu>
      <hr />
      <Menu theme="dark" mode="inline" >
      <MenuItemGroup key="1" title={
            <span>
              <Icon type="tags" style={{ fontSize: 14}} />
            <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
            Tags
            </span>
            </span>
            }>
        {tags.map((tag, i) =>
          <Menu.Item key={i}>
             <Icon />
            <span className="nav-text">{tag}</span>
          </Menu.Item>
        )}
      </MenuItemGroup>
      </Menu>
      </div>
)

export default RootMenu;