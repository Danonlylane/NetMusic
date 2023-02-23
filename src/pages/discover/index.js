import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { discoverMenu } from "@/common/local-data";

import { DiscoverWrapper, TopMenu } from './style';

export default memo(function BeiDiscover(props) {
    const { route } = props; // test pull request
    
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
