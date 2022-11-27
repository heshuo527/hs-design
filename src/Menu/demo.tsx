import React from 'react';
import TransMenu from '.';

const demo = () => {
  return (
    <TransMenu defaultIndex={'0'} onSelect={() => console.log(111)} defaultOpenSubMenu={['3']}>
      <TransMenu.Item>首页</TransMenu.Item>
      <TransMenu.Item>作品集</TransMenu.Item>
      <TransMenu.Item>关于我们</TransMenu.Item>
      <TransMenu.SubMenu title="dropdown">
        <TransMenu.Item>dropdown 1</TransMenu.Item>
        <TransMenu.Item>dropdown 2</TransMenu.Item>
      </TransMenu.SubMenu>
      <TransMenu.Item disabled>常见问题</TransMenu.Item>
    </TransMenu>
  );
};

export default demo;
