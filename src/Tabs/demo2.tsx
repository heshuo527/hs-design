import React from 'react';
import Tabs from './tabs';
import TabItem from './tabItem';

const App = () => {
  return (
    <Tabs type="card">
      <TabItem label="card1">this is content one</TabItem>
      <TabItem disabled label="disabled">
        this is content two
      </TabItem>
      <TabItem label="card2">this is content three</TabItem>
    </Tabs>
  );
};

export default App;
