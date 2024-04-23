import { SearchSIcon } from '../icon/Icon';
import React from 'react';
import Input from '../Input';
import './demo.less';

const App = () => {
  return (
    <>
      <Input append={<SearchSIcon />} placeholder="请输入" />
      <br></br>
      <Input prepend={'www.'} append={'.com'} placeholder="请输入文字" />
    </>
  );
};

export default App;
