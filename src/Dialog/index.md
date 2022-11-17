## 对话框
这是一个静态的对话框

### 何时使用
需要处理逻辑事务, 又不希望页面跳转以及打断工作流程时, 可以使用Dialog在当前页面开启一个浮层

<code
  src="./demo.tsx"
  title="组件式使用"
  desc="使用组件声明一个对话框，通过控制 visible 属性来显示/隐藏。"
/>
<code
  src="./demo2.tsx"
  title="异步关闭"
  desc="点击确定后异步提交对话框"
/>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 主按钮类型 | `default`  `dashed`  `primary`  `danger` |	`primary`
| title| 	标题	| `string` | `ReactNode` |	——
| content |	内容 |	`string` | `ReactNode`	| ——
| okText|	确认按钮文字	| `string` |	`确定`
| okType |	确认按钮类型 |	`default`  `dashed`  `primary`  `danger` |	`primary`
| cancelText |	取消按钮文字	| `string` |	——
| cancelType |	取消按钮类型	| `default`  `dashed`  `primary`  `danger` | `default`
| className | 自定义 Dialog 类名 | `string` | —— |
| onSize | 确认按钮的大小 | `default` `small` | `default` 
| cancelSize | 取消按钮的大小 | `default` `small` | `default` 
| onDialog | 点击主按钮时的回调 | `(e: React.MouseEvent) => any)` | ——
| onConfirm	| 点击确认按钮时的回调 |	`(e: React.MouseEvent) => any)` |	——
| onCancel	| 点击取消按钮时的回调 |	`(e: React.MouseEvent) => any)` |	——
| maskClosable |	点击蒙层是否关闭 Dialog |	`boolean`	| `false`
| onMask	| 点击蒙层时的回调 |	`(e: React.MouseEvent) => any)` |	——
| style |	自定义 Dialog 样式	| `React.CSSProperties` |	——
