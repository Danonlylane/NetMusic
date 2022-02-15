import React, { memo, useEffect } from 'react'

import BeiThemeHeaderRCM from '@/components/theme-header-rcm'
import { RankingWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreators'
import BeiTopRanking from '@/components/top-ranking'

const BeiRecommendRanking = memo(() => {
    const { upRanking, newRanking, originRanking } = useSelector(state => ({
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"])
    }), shallowEqual)
    // redux hooks
    const dispatch = useDispatch();

    // other hooks
    useEffect(() => {
        dispatch(getTopListAction(19723756));
        dispatch(getTopListAction(3779629));
        dispatch(getTopListAction(2884035));
    }, [dispatch])

    return (
        <RankingWrapper>
            <BeiThemeHeaderRCM title="榜单" />
            <div className="tops">
                <BeiTopRanking info={upRanking} />
                <BeiTopRanking info={newRanking} />
                <BeiTopRanking info={originRanking} />
            </div>
        </RankingWrapper>
    )
})

export default BeiRecommendRanking