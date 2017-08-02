import React from 'react';
import { Menu, Icon } from 'antd';
import { Input} from 'antd';
const Search = Input.Search;

const NoteList = ({items}) => (
      <div>
      <Menu theme="light" mode="inline">
      <Search
        placeholder="Search"
        style={{ width: 130, margin: '10px 20px 10px' }}
      />
      {items.map((item) =>
        <Menu.Item key={item.key}>
          <Icon/>
          <span className="nav-text">{item.title}</span>
        </Menu.Item>
      )}
      </Menu>
      </div>
)

export default NoteList;