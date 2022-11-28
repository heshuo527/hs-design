# hs-design

## 一套好用的 React PC 端组件库

> 本组件库仅供学习交流，请勿在生产环境中使用!!!

## 安装

```
$ npm install hs-design
$ yarn add hs-design
```

## 使用

```javascript
import React from 'react';
import { Button } from 'hs-design';
import 'hs-design/es/Button/index.css';

const Demo: React.FC = () => {
  return (
    <Button>click me</Button>;
  )
};
export default Demo;
```

需要注意的是，样式文件需要单独引入。
