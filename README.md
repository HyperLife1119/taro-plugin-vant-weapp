# taro-plugin-vant-weapp

一个 taro 插件，用于改善 vant-weapp 在 taro 中的使用体验。

## 功能

- 设置 vant-weapp 组件的属性默认值
- 标记 vant-weapp 中不可递归自身的组件

## 安装

```bash
$ npm i taro-plugin-vant-weapp -D
```

## 用法

### 1. 装配插件

```js
// Taro 项目配置
module.exports = {
  // ...
  plugins: [
    'taro-plugin-vant-weapp',
    // or
    ['taro-plugin-vant-weapp', {
      // 配置
    }]
  ]
}
```

### 2. 插件配置

| 参数         | 类型                                  | 描述                   |
| ------------ | ------------------------------------- | ---------------------- |
| components   | `Record<string, Record<string, any>>` | 修改、新增组件的属性   |
| nestElements | `Record<string, number>`              | 组件模版的循环次数     |
| voidElements | `string[]`                            | 组件是否可以渲染子元素 |
