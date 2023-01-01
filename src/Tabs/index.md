## 标签页

选项卡切换组件。

### 何时使用

平级区域大块内容的的收纳和展现。

<code
  src="./demo.tsx"
  title="基本用法"
  desc="最基本的用法, 默认选中第一项"
/>

<code
  src="./demo2.tsx"
  title="Tabs样式"
  desc="不带下划线的样式和禁用某一项"
/> <code
  src="./demo3.tsx"
  title="Icon图标"
  desc="自定义选项卡样式"
/>

## API

### Tabs

| 参数         | 说明                      | 类型                                | 默认值 |
| ------------ | ------------------------- | ----------------------------------- | ------ |
| defaultIndex | 当前激活 tab 面板的 index | `number`                            | `"0"`  |
| type         | Tabs 的样式               | `line 和 card`                      | `line` |
| className    | 自定义 className 类名     | `string`                            | -      |
| style        | 根节点样式                | `CSSProperties`                     | -      |
| onSelect     | 点击 Tab 触发的回调函数   | `((selectedIndex: string) => void)` | -      |

### TabItem

| 参数     | 说明               | 类型      | 默认值  |
| -------- | ------------------ | --------- | ------- |
| label    | Tab 选项上面的文字 | `string ` | -       |
| disabled | Tab 选项是否被禁用 | `boolean` | `false` |
