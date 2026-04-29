## 栅格

24 栅格系统。

### 基础栅格

基础的栅格用法。

<code
  src="./demo.tsx"
  title="基础栅格"
  desc="通过 Row 和 Col 来构建栅格布局"
/>

### 带间距和对齐

通过 `gutter` 设置间距，通过 `align` 设置垂直对齐。

<code
  src="./demo2.tsx"
  title="间距和对齐"
  desc="设置栅格间距和垂直对齐方式"
/>

## API

### Row

| 参数    | 说明           | 类型                                       | 默认值   |
| ------- | -------------- | ------------------------------------------ | -------- |
| gutter  | 栅格间距       | `number \| [number, number]`              | `0`      |
| align   | 垂直对齐方式   | `top \| middle \| bottom`                  | `top`    |
| justify | 水平排列方式   | `start \| end \| center \| space-around \| space-between` | `start` |
| className | 自定义类名   | `string`                                   | ——       |
| style   | 自定义样式     | `CSSProperties`                            | ——       |

### Col

| 参数    | 说明           | 类型                                       | 默认值   |
| ------- | -------------- | ------------------------------------------ | -------- |
| span    | 栅格占位       | `number` (0-24)                           | ——       |
| offset  | 栅格左侧偏移   | `number`                                   | `0`      |
| pull    | 栅格向左偏移   | `number`                                   | `0`      |
| push    | 栅格向右偏移   | `number`                                   | `0`      |
| xs      | 超小屏幕响应式 | `number \| ColProps`                       | ——       |
| sm      | 小屏幕响应式   | `number \| ColProps`                       | ——       |
| md      | 中等屏幕响应式 | `number \| ColProps`                       | ——       |
| lg      | 大屏幕响应式   | `number \| ColProps`                       | ——       |
| xl      | 超大屏幕响应式 | `number \| ColProps`                       | ——       |
| className | 自定义类名   | `string`                                   | ——       |
| style   | 自定义样式     | `CSSProperties`                            | ——       |
