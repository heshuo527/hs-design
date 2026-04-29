## 表格

展示行列数据。

### 基础用法

简单的表格。

<code
  src="./demo.tsx"
  title="基础表格"
  desc="基础的表格用法"
/>

### 带边框和悬停

添加 `bordered` 属性显示边框，`hoverable` 属性启用行悬停效果。

<code
  src="./demo2.tsx"
  title="带边框和悬停"
  desc="带边框和行悬停效果的表格"
/>

## API

### Table

| 参数        | 说明                     | 类型                           | 默认值    |
| ----------- | ------------------------ | ------------------------------ | --------- |
| columns     | 表格列的配置描述         | `Column[]`                     | ——        |
| dataSource  | 数据数组                 | `any[]`                        | ——        |
| bordered    | 是否显示边框             | `boolean`                     | `false`   |
| hoverable   | 是否启用行悬停效果       | `boolean`                     | `false`   |
| rowKey      | 行 key 的取值            | `string \| (record) => string`| `key`     |
| onRow       | 设置行属性               | `(record, index) => object`   | ——        |
| className   | 自定义表格类名           | `string`                       | ——        |
| style       | 自定义表格样式           | `CSSProperties`                | ——        |

### Column

| 参数      | 说明           | 类型                             | 默认值  |
| --------- | -------------- | -------------------------------- | ------- |
| title     | 列头显示文字   | `ReactNode`                      | ——      |
| dataIndex | 列数据字段     | `string`                         | ——      |
| key       | 唯一标识       | `string`                         | ——      |
| width     | 列宽度         | `string \| number`               | ——      |
| align     | 列对齐方式     | `left \| center \| right`        | `left`  |
| render    | 自定义渲染函数 | `(text, record, index) => ReactNode` | ——  |
