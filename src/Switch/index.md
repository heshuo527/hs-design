## Switch 开关
开关选择器。

### 何时使用
需要在两种状态之间切换时。

<code
  src='./demo1.tsx'
/>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked |	当前选中状态 |	boolean	| ——
| defaultChecked |	默认选中状态 |	boolean |	false
| size |	尺寸大小 |	'small' 'default' |	'default'
| disabled |	禁用状态 | boolean | false
| onChange |	选中状态改变时的回调 |	(checked: boolean, e: React.MouseEvent) => any |	——
| className |	自定义外层容器类名 |	string	| ——
| style |	自定义外层容器样式 |	React.CSSProperties |	——
