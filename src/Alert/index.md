## 警示提醒

警告提示，展现需要关注的信息。

### 何时使用

当某个页面需要向用户显示警告的信息时。非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

<code
  src="./demo.tsx"
  title="基本用法"
  desc="最简单的用法，适用于简短的警告提示。"
/>

<code
  src="./demo2.tsx"
  title="含有辅助性文字"
  desc="含有辅助性文字介绍的警告提示。"
/> <code
  src="./demo3.tsx"
  title="自定义Icon图标"
  desc="添加图标让信息类型更加醒目。"
/>

## API

| 参数        | 说明                             | 类型                             | 默认值    |
| ----------- | -------------------------------- | -------------------------------- | --------- |
| title`*`    | 警告提示内容                     | `string`                         | —         |
| description | 辅助文字描述                     | `string`                         | —         |
| type        | 四种可选类型, 针对四种不同的场景 | `success default danger warning` | `default` |
| onClose     | 关闭 alert 时触发的事件          | `(() => void)`                   | —         |
| closable    | 是否显示关闭图标                 | `boolean`                        | `true`    |
| icon        | 自定义 icon 图标                 | `组件`                           | —         |
