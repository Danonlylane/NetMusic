import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { discoverMenu } from "@/common/local-data";
import { useGlobalKeyboardEvent } from '@/hooks/change-state'


import { DiscoverWrapper, TopMenu } from './style';

export default memo(function BeiDiscover(props) {
    const { route } = props;
    useGlobalKeyboardEvent()// 全局注册 ctrl+k 唤醒下拉框 2023.02.23在window11测试git


    return (
        <DiscoverWrapper>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {
                        discoverMenu.map((item, index) => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
});
