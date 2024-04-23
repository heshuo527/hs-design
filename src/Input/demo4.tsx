import React from 'react';
import Input from '../Input';
import './demo.less';

const App = () => {
  return (
    <>
      <Input size="small" defaultValue="small" />
      <div style={{ marginBottom: 20 }}></div>
      <Input defaultValue="default" />
      <div style={{ marginBottom: 20 }}></div>
      <Input size="lager" defaultValue="lager" />
    </>
  );
};

export default App;
