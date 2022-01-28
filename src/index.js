import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



// 前期导入是这样
// import "./assets/css/reset.css";

// 配置了别名之后
import "@/assets/css/reset.css";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
