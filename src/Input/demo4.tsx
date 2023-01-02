import React from 'react';
import Input from '../Input';
import './demo.less';

const App = () => {
  return (
    <>
      <Input size="small" defaultValue="small" />
      <Input defaultValue="default" />
      <Input size="lager" defaultValue="lager" />
    </>
  );
};

export default App;
