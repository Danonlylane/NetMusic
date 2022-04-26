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



### Redux 引入项目

根目录下的整个项目的 store 文件，作用是将所有模块的 store 文件连接起来

>  src/store/index.js

```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;
```

> netmusic-react/src/store/reducer.js

```javascript
import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';
import { reducer as rankingReducer } from '../pages/discover/c-pages/ranking/store';
import { reducer as songsReducer } from "../pages/discover/c-pages/songs/store";

import { reducer as djradioReducer } from "../pages/discover/c-pages/djradio/store";
import { reducer as artistReducer } from "../pages/discover/c-pages/artist/store";
import { reducer as albumReducer } from "../pages/discover/c-pages/album/store";


import { reducer as themeHeaderReducer } from '../components/app-header/store';
import { reducer as searchReducer } from '../pages/search/store'



const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingReducer,
  songs: songsReducer,
  djradio: djradioReducer,
  artist: artistReducer,
  album: albumReducer,
  search: searchReducer,
  themeHeader: themeHeaderReducer,

});

export default cReducer;
```

使用 react-redux 中提供的 Provider 组件，将整体的 store 引入根组件

```javascript
// 引入外部
import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';

// 引入功能性
import routes from './router';
import store from './store'
import { Provider } from 'react-redux';

// 自定义
import BeiAppHeader from '@/components/app-header';
import BeiAppFooter from '@/components/app-footer';
import { HashRouter } from 'react-router-dom';
import BeiAppPlayerBar from './pages/player/app-player-bar';

export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <BeiAppHeader />
                <Suspense fallback={<div>page loading</div>}>
                    {renderRoutes(routes)}
                </Suspense>
                <BeiAppFooter />
                <BeiAppPlayerBar />
            </HashRouter>
        </Provider>
    )
});
```



### 播放栏功能的实现

整个播放栏是一个大的组件

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h1mhzgwla0j21mk02yt98.jpg)

结构大致代码如下：

从左到右分为：控制歌曲播放组件、歌曲播放信息组件、其他控制功能组件

```html
<PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                </Control>
                <PlayInfo>
                </PlayInfo>
                <Operator sequence={sequence}>
                </Operator>
            </div>
            <audio
                id="audio"
                preload="auto"
                ref={audioRef}
                onTimeUpdate={e => timeUpdate(e)}
                onEnded={e => handleMusicEnded()} />
</PlaybarWrapper>
```

获取当前歌曲

```javascript
// 默认歌曲
useEffect(() => {
        dispatch(getSongDetailAction(167876));
}, [dispatch]);

// 如果当前歌曲发生改变，组件重新渲染，对应的 audio 组件的 src 也发生改变
useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
        audioRef.current.play().then(res => {
            setIsPlaying(true);
        }).catch(err => {
            setIsPlaying(false);
        });
}, [currentSong]);
```

播放音乐功能：

```javascript
const playMusic = useCallback(() => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
}, [isPlaying]);
```

audio 组件的播放时间改变

```javascript
const timeUpdate = (e) => {
        const currentTime = e.target.currentTime;
        if (!isChanging) {
            setCurrentTime(currentTime * 1000);
            setProgress(currentTime * 1000 / duration * 100);
        }
}
```

拖动滑块改变时间，歌曲的播放时间也随之改变

```javascript
const sliderChange = useCallback((value) => {
        setIsChanging(true);
        const currentTime = value / 100 * duration;
        setCurrentTime(currentTime);
        setProgress(value);
    }, [duration]);

const sliderAfterChange = useCallback((value) => {
        const currentTime = value / 100 * duration;
        audioRef.current.currentTime = currentTime;
        setCurrentTime(currentTime);
        setIsChanging(false);

        if (!isPlaying) {
            playMusic();
        }
    }, [duration, isPlaying, playMusic]);
```

### 歌曲歌词展示功能的实现



从 redux 中获取当前的歌曲和歌词到当前组件（歌词在获取当前的歌曲信息时，已经下载到 redux 里面了）

> src/pages/player/app-player-bar/index.js

```javascript
// redux hook
    const {
        currentSong,
        lyricList,
        currentLyricIndex
    } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        lyricList: state.getIn(["player", "lyricList"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
    }), shallowEqual);
```

redux 里面获取歌词的 action

```javascript
export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changLyricListAction(lyricList));
    })
  }
}
```

> src/services/player.js

```javascript
export function getLyric(id) {
    return request({
        url: "/lyric",
        params: {
            id
        }
    })
}
```

根据后台返回的数据，对歌词进行解析

> src/utils/parse-lyric.js

```javascript
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyricString) {
  const lineStrings = lyricString.split("\n");

  const lyrics = [];
  for (let line of lineStrings) {
    if (line) {
      const result = parseExp.exec(line);
      if (!result) continue;
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3? result[3]*1: result[3]*10;
      const time = time1 + time2 + time3;
      const content = line.replace(parseExp, "").trim();
      const lineObj = {time, content};
      lyrics.push(lineObj);
    }
  }
  return lyrics;
}
```

利用时间和下标找到当前时间对应的歌词，将歌词放在 AntDesign 的 message 组件上

```javascript
 const timeUpdate = (e) => {
        const currentTime = e.target.currentTime;
        if (!isChanging) {
            setCurrentTime(currentTime * 1000);
            setProgress(currentTime * 1000 / duration * 100);
        }

        // 获取当前的歌词
        let i = 0;
        for (; i < lyricList.length; i++) {
            let lyricItem = lyricList[i];
            if (currentTime * 1000 < lyricItem.time) {
                break;
            }
        }

        if (currentLyricIndex !== i - 1) {
            dispatch(changeCurrentLyricIndexAction(i - 1));
            const content = lyricList[i - 1] && lyricList[i - 1].content
            message.open({
                key: "lyric",
                content: content,
                duration: 0,
                className: "lyric-class"
            })
        }
    }
```

### 搜索框的实现

使用 AntD 的 input 组件

```javascript
import { Input } from 'antd';
```

input 组件的设置

```javascript
<Input
            ref={inputRef}
            className="search "
            placeholder="音乐/歌手"
            size="large"
            prefix={<SearchOutlined />}
            onChange={(e) => setIsRedirect(false) || setValue(e.target.value)}
            onInput={({ target }) => changeInput(target)}
            onFocus={handleFocus}
            onPressEnter={(e) => handleEnter(e)}
            value={value}
            onKeyDown={watchKeyboard}
            suffix={icons}
        />
```

输入框内容变化时的回调：使用受控组价拿到搜索框里面输入的内容，然后使用防抖节流优化发起请求。

```javascript
// other function 增强版的防抖函数对搜索框进行优化
    const changeInput = ThrottleEnhanceDebounce((target) => {
        let value = target.value.trim();
        if (value.length < 1) return;
        // 显示下拉框
        dispatch(changeFocusStateAction(true));
        // 发送网络请求
        dispatch(getSearchSongListAction(value));
    }, 500)
```

如果聚焦到搜索框：下拉框就显示

```javascript
<div
	className="down-slider"
  style={{ display: focusState ? 'block' : 'none' }}
>
```

获取焦点

```javascript
const handleFocus = useCallback(() => {
        // 当文本获取焦点时,文本被选中状态
        inputRef.current.select();
        // 更改为获取焦点状态
        dispatch(changeFocusStateAction(true));
        // 修改状态重定向状态
        setIsRedirect(false);
}, [dispatch]);
```

监控用户是否按: "上"或"下"键

```javascript
    const watchKeyboard = useCallback(
        (even) => {
            let activeNumber = recordActive;
            if (even.keyCode === 38) {
                activeNumber--;
                activeNumber =
                    activeNumber < 0 ? searchSongList?.length - 1 : activeNumber;
                setRecordActive(activeNumber);
            } else if (even.keyCode === 40) {
                activeNumber++;
                activeNumber =
                    activeNumber >= searchSongList?.length ? 0 : activeNumber;
                setRecordActive(activeNumber);
            }
        },
        [recordActive, setRecordActive, searchSongList]
    );
```

监听 enter 键状态：跳转到搜索详情

```javascript
    const handleEnter = useCallback(
        (e) => {
            // 说明当前光标有”高亮当前行“
            if (recordActive >= 0) {
                // 保存value
                setValue(
                    searchSongList[recordActive].name +
                    '-' +
                    searchSongList[recordActive].artists[0].name
                );
            }
            dispatch(changeFocusStateAction(false));
            // 只要在搜索框回车: 都进行跳转
            setIsRedirect(true);
        },
        [dispatch, recordActive, searchSongList]
    );
```

下拉框的实现：自己封装的 hooks

```javascript
/**
 * 调用该hook注册全局键盘事件: ctrl+k唤醒搜索框  esc关闭下拉框
 */
export function useGlobalKeyboardEvent() {
  const showDropBoxState = useChangeDropBoxState(true)
  const closeDropBoxState = useChangeDropBoxState(false)
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
      // 阻止默认事件
      e.preventDefault()
      showDropBoxState()
    }
    if (e.key === 'Escape') {
      closeDropBoxState()
    }
  })
}
```



### 收获的小技巧

1. a 标签的内容以及 SEO 优化：在 a 标签里面，如果写上了文字内容，但是我们又希望这个标签是一个 Logo 图片的话，那么文字内容就是多余的，但是为了搜索引擎能够爬取到关键字，所以文字内容又是必须的，这样的话，可以使用 css 中的 `text-indent: -9999px;` 来将文字内容放到屏幕外面。

```html
 <a href="#/" className="logo sprite_01">网易云音乐</a>
```



