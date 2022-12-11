## 虚拟列表

可以根据用户的滚动，不必渲染所有列表项，而只是渲染可视区域内的一部分列表元素

### 何时使用

当有大量数据需要展示时, 可以使用虚拟列表高性能展示数据

<code
  src="./demo.tsx"
   title="列表项高度固定"
  desc="水平的顶部导航菜单。"
/>

<code
  src="./demo2.tsx"
   title="基础用法"
  desc="水平的顶部导航菜单。"
/>

## API

| 参数            | 说明               | 类型                  | 默认值 |
| --------------- | ------------------ | --------------------- | ------ |
| containerHeight | 容器高度           | `number`              | ——     |
| itemHeight      | 每个元素高度       | `number`              | ——     |
| itemCount       | 元素数量           | `React.CSSProperties` | ——     |
| contentCount    | 上下额外渲染的数量 | `number`              | `0`    |
| crossCount      | 处理越界情况       | `number`              | `0`    |
| classNames      | 自定义元素类名     | `string`              | ——     |
