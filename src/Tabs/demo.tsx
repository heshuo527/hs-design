import React from 'react';
import Tabs from './tabs';
import TabItem from './tabItem';

const App = () => {
  return (
    <Tabs>
      <TabItem label="选项卡一">this is content one</TabItem>
      <TabItem label="选项卡二">this is content two</TabItem>
      <TabItem label="用户管理">this is content three</TabItem>
    </Tabs>
  );
};

export default App;
