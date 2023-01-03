## 输入框

用于输入内容的基础表单组件。

### 何时使用

需要用户输入内容时。

<code
  src="./demo.tsx"
  title="基本用法"
  desc="最基本的用法"
/>

<code
  src="./demo2.tsx"
  title="禁用"
  desc="禁用状态"
/>

<code
  src="./demo3.tsx"
  title="前缀 / 后缀标签"
  desc="在输入框上添加前缀或后缀。"
/>

<code
  src="./demo4.tsx"
  title="不同大小"
  desc="不同大小的输入框"
/>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 输入框默认值 | `string` | `-` |
| disabled | 禁用状态 | `boolean` | `false` |
| size | 输入框尺寸 | `small` `medium` `large` | `medium` |
| children | 子元素 | `ReactNode` | `-` |
| icon | 添加图标，在右侧悬浮添加一个图标，用于提示 | `IconProp` | `SearchIcon` |
| prepend | 添加前缀 用于配置一些固定组合 | `string ReactElement<any, string JSXElementConstructor<any>>` | `-` |
| append | 添加后缀 用于配置一些固定组合 | `string ReactElement<any, string JSXElementConstructor<any>>` | `-` |
| onChange | 事件监听 | `((e: ChangeEvent<HTMLInputElement>) => void)` | `-` |
| onKeyDown | 按下键盘时的回调 | `React.KeyboardEventHandler` | `-` |
| onFocus | 聚焦时的回调 | `React.FocusEventHandler` | `-` |
| onBlur | 失去焦点时的回调 | `React.FocusEventHandler` | `-` |
