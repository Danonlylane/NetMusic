// 引入外部
import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';


// 引入功能性
import routes from './router';

// 自定义
import BeiAppHeader from '@/components/app-header';
import BeiAppFooter from '@/components/app-footer';
import { HashRouter } from 'react-router-dom';

export default memo(function App() {
    return (
        <HashRouter>
            <BeiAppHeader />
            {renderRoutes(routes)}
            <BeiAppFooter />
        </HashRouter>
    )
});
