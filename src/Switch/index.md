## 开关
开关选择器。

### 何时使用
需要在两种状态之间切换时。

<code
  src='./demo1.tsx'
  title="基本用法"
  desc="最基本的的用法"
/>
<code
  src='./demo2.tsx'
  title="开关大小"
  desc="两种尺寸可选"
/>
<code
  src='./demo3.tsx'
  title="禁用状态"
  desc="通过添加disabled属性来使其禁用"
/>
<code
  src='./demo4.tsx'
  title="默认选中"
  desc="设置默认选中的状态"
/>
<code
  src='./demo5.tsx'
  title="受控"
  desc="当前选中的状态由checked控制"
/>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked |	当前选中状态 |	`boolean`	| ——
| size |	尺寸大小 |	`small` `default` |	`default`
| disabled |	禁用状态 | `boolean` | `false`
| onChange |	选中状态改变时的回调 |	`(checked: boolean, e: React.MouseEvent) => any` |	——
| className |	自定义外层容器类名 |	`string`	| ——
| style |	自定义外层容器样式 |	`React.CSSProperties` |	——
