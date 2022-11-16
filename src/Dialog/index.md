## 对话框
这是一个静态的对话框

### 何时使用
需要处理逻辑事务, 又不希望页面跳转以及打断工作流程时, 可以使用Dialog在当前页面开启一个浮层

<code
  src="./demo.tsx"
  desc="基本对话框"
/>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title| 	标题	| `string` | `ReactNode` |	——
| content |	内容 |	`string` | `ReactNode`	| ——
| okText|	确认按钮文字	| `string` |	`确定`
| okType |	确认按钮类型 |	`default`  `dashed`  `primary`  `danger` |	`primary`
| cancelText |	取消按钮文字	| `string` |	`取消`
| cancelType |	取消按钮类型	| `default`  `dashed`  `primary`  `danger` | `default`
| className | Switch 器类名 | `string` | - |
| defaultChecked | 初始是否选中 | `boolean` | `false` |
| size | 开关大小，可选值：`default` `small` | `string` | `default` |
| unCheckedChildren | 非选中时的内容 | `ReactNode` | - |
| onChange | 变化时的回调函数 | function(checked: boolean, event: Event) | - |
| onClick | 点击时的回调函数 | function(checked: boolean, event: Event) | - |
| style |	自定义 Modal 样式	| React.CSSProperties |	——
