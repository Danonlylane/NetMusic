import React, { memo } from 'react';

import { getCount, getSizeImage } from "@/utils/format-utils";

import { SongsCoverWrapper } from './style';

export default memo(function BeiSongsCover(props) {
    const { info } = props;

    return (
        <SongsCoverWrapper>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl, 140)} alt="" />
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(info.playCount)}
                            {/* {info.playCount} */}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap">
                {info.name}
            </div>
            <div className="cover-source text-nowrap">
                {/* 取消了这个接口的nickname数据 */}
                {/* by {info.copywriter || info.creator.nickname} */}
                by 热门推荐
            </div>
        </SongsCoverWrapper>
    )
})
