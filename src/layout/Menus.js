import React from 'react';
import RootMenu from './RootMenu';
import SubMenu from './SubMenu';

const RootMenuItems = [
  { key: 1, title: 'General', icon: 'apple' },
  { key: 2, title: 'Trash', icon: 'delete' },
];

const RootMenuTags = [
  'Learning',
  'React',
  'Is basically',
  'learning JS',
];

const Menus = function Menus() {
  return (
    <div>
      <RootMenu items={RootMenuItems} tags={RootMenuTags} />

      <SubMenu />
    </div>
  );
};

export default Menus;
