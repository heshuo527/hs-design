import React from 'react';
import Input from '../Input';
import { SearchSIcon } from '@/icon/Icon';
import './demo.less';

const demo = () => {
  return <Input onClick={(e) => console.log(e.target)} />;
};

export default demo;
