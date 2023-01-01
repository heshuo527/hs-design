import React from 'react';
import Tabs from './tabs';
import TabItem from './tabItem';
import { MyIcon } from '../icon/Icon';

const App = () => {
  return (
    <Tabs type="card">
      <TabItem label="Tab1">this is content one</TabItem>
      <TabItem
        label={
          <>
            <MyIcon />
            自定义Icon图标
          </>
        }
      >
        this is content two
      </TabItem>
      <TabItem label="Tab3">this is content three</TabItem>
    </Tabs>
  );
};

export default App;
