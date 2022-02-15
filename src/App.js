// 引入外部
import React, { memo } from 'react';
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
                {renderRoutes(routes)}
                <BeiAppFooter />
                <BeiAppPlayerBar />
            </HashRouter>
        </Provider>
    )
});
