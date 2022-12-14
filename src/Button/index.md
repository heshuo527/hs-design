## 按钮

点开即时操作

### 基础用法

响应用户点击行为，触发相应业务逻辑。

<code
  src="./demo.tsx"
  title="按钮类型"
  desc="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
/>

<code
  src="./demo2.tsx"
  title="按钮尺寸"
  desc="按钮有大、中、小三种尺寸。"
/>

<code
  src="./demo3.tsx"
  title="幽灵按钮"
  desc="幽灵按钮常用在有色背景上。"
  background= "rgba(0, 0, 0, 0.45)"
/>

<code
  src="./demo4.tsx"
  title="禁用按钮"
  desc="添加disabled属性后状态为不可点,也不会触发onClick事件"
/>

<code
  src="./demo5.tsx"
  title="loading状态和icon图标"
  desc="设置按钮在加载中状态, 可以自行添加icon图标"
/>

## API

| 参数      | 说明                 | 类型                                  | 默认值    |
| --------- | -------------------- | ------------------------------------- | --------- |
| icon      | 自定义 Icon 图标     | `组件`                                | ——        |
| type      | 不同样式风格的按钮   | `default` `dashed` `primary` `danger` | `default` |
| size      | 按钮的尺寸           | `small` `medium` `large`              | `medium`  |
| disabled  | 禁用状态             | `boolean`                             | `false`   |
| ghost     | 幽灵按钮             | `boolean`                             | `false`   |
| htmlType  | 按钮的原生 type 属性 | `button` `submit` `reset`             | `button`  |
| onClick   | 点击按钮时的回调     | `React.MouseEventHandler`             | ——        |
| className | 自定义 Button 类名   | `string`                              | ——        |
| style     | 自定义 Button 样式   | `React.CSSProperties`                 | ——        |

## 内置 Icon 图标 Api

| 参数      | 说明             | 类型         | 默认值  |
| --------- | ---------------- | ------------ | ------- |
| size      | icon 图标的大小  | `number(px)` | `16px`  |
| className | 自定义 icon 类名 | `string`     | ——      |
| loading   | 加载中状态       | `boolean`    | `false` |
