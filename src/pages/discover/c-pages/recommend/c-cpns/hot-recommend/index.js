import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import {
    HOT_RECOMMEND_LIMIT
} from "@/common/constants"
import BeiThemeHeaderRCM from '@/components/theme-header-rcm'
import BeiSongsCover from '@/components/songs-cover'

import {
    HotRecommendWrapper,
} from "./style"
import { getHotRecommendAction } from '../../store/actionCreators'

const BeiHotRecommend = memo(() => {
    //redux hooks
    const dispatch = useDispatch();

    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(["recommend", "hotRecommends"])
    }), shallowEqual)

    // other hooks
    useEffect(() => {
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
    }, [dispatch])


    return (
        <HotRecommendWrapper>
            <BeiThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
            <div className='recommend-list'>
                {
                    hotRecommends.map((item, index) => {
                        return (
                            <BeiSongsCover key={item.id} info={item}>
                                {item}
                            </BeiSongsCover>

                        )
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})

export default BeiHotRecommend