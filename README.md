# React网易云音乐项目

[toc]

### 配置别名

1. 安装第三方库`yarn add @craco/craco`

   - 作用：不暴露webpack原本配置的情况下，给项目添加webpack配置

2. 把package.json里面的`scripts`片段

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

3. 在根目录下新建`craco.config.js`文件

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

 
