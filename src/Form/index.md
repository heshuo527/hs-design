## 表单

用于数据录入、校验和提交。

### 基础用法

水平的表单项布局。

<code
  src="./demo.tsx"
  title="水平布局"
  desc="水平的表单项布局，适用于较少的表单项"
/>

### 垂直布局

垂直的表单项布局。

<code
  src="./demo2.tsx"
  title="垂直布局"
  desc="垂直的表单项布局，适用于较多表单项"
/>

## API

### Form

| 参数          | 说明           | 类型                             | 默认值      |
| ------------- | -------------- | -------------------------------- | ----------- |
| layout        | 表单布局       | `horizontal \| vertical \| inline` | `horizontal` |
| onFinish      | 提交成功回调   | `(values: object) => void`       | ——          |
| onFinishFailed| 提交失败回调   | `(values: object, errors: object) => void` | —— |
| className     | 自定义类名     | `string`                         | ——          |
| style         | 自定义样式     | `CSSProperties`                  | ——          |

### FormItem

| 参数    | 说明         | 类型                             | 默认值 |
| ------- | ------------ | -------------------------------- | ------ |
| label   | 标签文本     | `string`                         | ——     |
| name    | 字段名       | `string`                         | ——     |
| rules   | 校验规则     | `ValidationRule[]`               | ——     |
| trigger | 触发校验的事件 | `change \| blur`                | `change` |
| className | 自定义类名 | `string`                         | ——     |
| style   | 自定义样式   | `CSSProperties`                  | ——     |

### ValidationRule

| 参数      | 说明           | 类型                                       | 默认值 |
| --------- | -------------- | ------------------------------------------ | ------ |
| required  | 是否必填       | `boolean`                                  | ——     |
| message   | 错误提示文本   | `string`                                   | ——     |
| pattern   | 正则表达式     | `RegExp`                                   | ——     |
| min       | 最小长度       | `number`                                   | ——     |
| max       | 最大长度       | `number`                                   | ——     |
| validator | 自定义校验函数 | `(value) => boolean \| string \| Promise`  | ——     |
