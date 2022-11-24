# HS-Design

## 一套好用的 PC 端 React 组件库

> 本组件库仅供学习交流，请勿在生产环境中使用!!!

## 安装

```
$ npm install HS-Design
$ yarn add HS-Design
```

## 使用

```javascript
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from 'hs-design'
import 'hs-design/lib/hs-design.css'

ReactDOM.render(
  <div>
    <Button>Default</Button>
  </div>,
  mountNode
)
```

需要注意的是，样式文件需要单独引入。
