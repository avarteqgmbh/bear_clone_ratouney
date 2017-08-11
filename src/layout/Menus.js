import React from 'react';
import RootMenu from './RootMenu';
import SubMenu from './SubMenu';

const RootMenuItems = [
  { key: 1, title: 'General', icon: 'apple', note_category: '/' },
  { key: 2, title: 'Trash', icon: 'delete', note_category: '/trash' },
];

const RootMenuTags = [
  'Learning',
  'React',
  'Is basically',
  'learning JS',
];

const Menus = function Menus(props) {
  return (
    <div>
      <RootMenu items={RootMenuItems} tags={RootMenuTags} />

      <SubMenu />
    </div>
  );
};

export default Menus;
