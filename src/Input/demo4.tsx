import React from 'react';
import Input from '../Input';
import './demo.less';

const App = () => {
  return (
    <>
      <Input size="small" placeholder="small" />
      <div style={{ marginBottom: 20 }}></div>
      <Input placeholder="default" />
      <div style={{ marginBottom: 20 }}></div>
      <Input size="lager" placeholder="lager" />
    </>
  );
};

export default App;
