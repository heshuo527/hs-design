import React from 'react';
import Input from '../Input';
import { SearchSIcon } from '@/icon/Icon';
import './demo.less';

const demo = () => {
  return <Input onClick={(e) => console.log(e.target)} placeholder="请输入内容" />;
};

export default demo;
