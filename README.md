# React网易云音乐项目开发文档

[toc]

### 在线预览地址

- 😋 项目在线预览地址：http://beiyep.cn:7878/

### 技术栈

- `CSS` 使用 `Flex` 进行布局
- 配置路径别名使用 `carco`
- 项目路由使用 `react-router` 来管理
- 使用 `react-router-config` 集中式路径映射表管理
- 使用 `styled-components` + 普通的 `css` 编写样式
- 使用 `axios` 发送网络请求
- 项目全面拥抱 `React Hooks`
- 项目组件库使用 `ant design`
- 使用 `immutable` 对项目 `reducer` 中 `state` 进行管理
- 使用 `redux-immtable`  对根目录 `reducer` 中 `state` 进行管理
- 项目使用 `redux-thunk` 中间件
- 使用 `propType` 校验 `props` 类型及默认值
- 使用 `react-transition-group` 添加过渡动画效果
- 项目中的优化: 函数式组件全部采用 `memo`、路由懒加载、函数防抖



### 项目规范

项目规范：项目中有一些开发规范和代码风格 (也可以按照自己的习惯)

- 文件夹、文件名称统一小写、多个单词以连接符（`-`）连接；

- `JavaScript`变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；

- CSS采用普通`CSS`和`styled-component`结合来编写

- 全局采用普通`CSS`、局部采用`styled-component`

- 整个项目不再使用`class`组件，统一使用函数式组件，并且全面拥抱`Hooks`；

- 所有的函数式组件，为了避免不必要的渲染，全部使用`memo`进行包裹；

- 组件内部的状态，使用`useState`、`useReducer`；业务数据全部放在`redux`中管理；

- 函数组件内部基本按照如下顺序编写代码：
  - 组件内部`state`管理；
  - `redux`的`hooks`代码；
  - 其他组件`hooks`代码；
  - 其他逻辑代码；
  - 返回JSX代码；

- `redux`代码规范如下:
  - 每个模块有自己独立的`reducer`，通过`combineReducer`进行合并；
  - 异步请求代码使用`redux-thunk`，并且写在`actionCreators`中；
  - `redux`直接采用`redux hooks`方式编写，不再使用`connect`；

### 配置别名

1. 安装第三方库 `yarn add @craco/craco`

   - 作用：不暴露 `webpack` 原本配置的情况下，给项目添加 `webpack` 配置

2. 把 `package.json` 里面的 `scripts` 片段

   ```json
    "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "test": "react-scripts test",
       "eject": "react-scripts eject"
     },
   ```

   修改为

   ```json
   "scripts": {
       "start": "craco start",
       "build": "craco build",
       "test": "craco test",
       "eject": "craco eject"
     },
   ```

3. 在根目录下新建 `craco.config.js` 文件

   ```javascript
   const path = require("path");
   
   const resolve = dir => path.resolve(__dirname, dir);
   
   module.exports = {
       webpack: {
           alias: {
               "@": resolve("src"),
               "component": resolve("src/components")
           }
       }
   }
   ```

   

4. 重启项目，在路径中使用别名即可。

   比如

   ```
   
   ```

   使用别名就很简洁

   ```
   
   ```

   

### 生成目录结构

利用 `tree` 这个目录树生成工具。`win` 原生支持
`mac` 下需要手动安装

```mipsasm
brew install tree 
```

`tree` 的几个常用命令

```sh
tree -d 只显示文件夹； 
tree -L n 显示项目的层级。n表示层级数。
tree -I pattern 用于过滤不想要显示的文件或者文件夹。
比如你想要过滤项目中的node_modules文件夹，可以使用tree -I "node_modules"； 
tree > tree.md 将项目结构输出到tree.md这个文件。
```

本项目结构忽略掉这些内容

`-I` 命令允许你使用正则匹配来排除掉你不想看到的**文件夹**，例如：

```shell
tree -I "node_modules"
```

也可以使用`|`同时排除掉多个文件夹：

```
tree -I "node_modules|build"
```

更多命令的使用可以查看tree --help

**本项目目录结构：**

```
.
├── README.md
├── craco.config.js
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.js
│   ├── assets
│   │   ├── css
│   │   ├── font
│   │   └── img
│   ├── common
│   │   ├── constants.js
│   │   └── local-data.js
│   ├── components
│   │   ├── album-cover
│   │   ├── app-footer
│   │   ├── app-header
│   │   ├── songs-cover
│   │   ├── theme-header-rcm
│   │   └── top-ranking
│   ├── index.js
│   ├── pages
│   │   ├── discover
│   │   ├── friend
│   │   ├── mine
│   │   └── player
│   ├── router
│   │   └── index.js
│   ├── services
│   │   ├── config.js
│   │   ├── player.js
│   │   ├── recommend.js
│   │   └── request.js
│   ├── store
│   │   ├── index.js
│   │   └── reducer.js
│   └── utils
│       ├── format-utils.js
│       ├── math-utils.js
│       └── parse-lyric.js
├── yarn-error.log
└── yarn.lock
```

