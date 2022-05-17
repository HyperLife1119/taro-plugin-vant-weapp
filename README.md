# taro-plugin-vant-weapp

一个用于补充 vant-weapp 组件属性的默认值的 taro 插件。

## 安装

```bash
npm i taro-plugin-vant-weapp
```

## 用法

### 1. 配置插件

```js
// Taro 项目配置
module.exports = {
  // ...
  plugins: [
    'taro-plugin-vant-weapp'
  ]
}
```

### 2. 编译小程序

```bash
taro build --type vant-weapp
taro build --type vant-weapp --watch
```
