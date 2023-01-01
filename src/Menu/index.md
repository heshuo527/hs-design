## 菜单

为网站提供导航功能的菜单。

### 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能, 侧边导航提供多级结构来收纳和排列网站架构。

<code
  src="./demo.tsx"
  title="基础用法"
  desc="水平的顶部导航菜单。"
/>

<code
  src="./demo2.tsx"
  title="内嵌菜单"
  desc="垂直菜单，子菜单内嵌在菜单区域。"
/>

## API

### Menu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultIndex | 默认 active 的菜单项的索引值 | `string` | `"0"` |
| className | 自定义 Menu 类名 | `string` | - |
| mode | 菜单类型 横向或者纵向 | `"horizontal"` `"vertical"` | `"horizontal"` |
| style | 根节点样式 | `CSSProperties` | - |
| onSelect | 点击菜单项触发的回调函数 | `((selectedIndex: string) => void)` | - |
| defaultOpenSubMenu | 设置子菜单的默认打开 只在纵向模式下生效 | `string[]` | `[]` |

### SubMenu

| 参数      | 说明                         | 类型     | 默认值 |
| --------- | ---------------------------- | -------- | ------ |
| index     | 唯一标识                     | `string` | -      |
| title`*`  | 下拉菜单选项的文字           | `string` | -      |
| className | 下拉菜单选型的自定义拓展类名 | `string` | -      |

### MenuItem

| 参数      | 说明                 | 类型            | 默认值  |
| --------- | -------------------- | --------------- | ------- |
| index     | 唯一标识             | `string`        | -       |
| disabled  | 选项是否被禁用       | `boolean`       | `false` |
| className | 选项扩展的自定义类名 | `string`        | -       |
| style     | 选项的自定义 style   | `CSSProperties` | -       |
