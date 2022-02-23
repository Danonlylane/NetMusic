import * as actionTypes from './constants';

import { getNewAlbums } from '@/services/recommend';

import {
    getTopBanners,
    getHotRecommends,
    getTopList,
    getArtistList,
    getHotRadio,
} from '@/services/recommend';

const changeHotRadioAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RADIO,
    hotRadios: res.data.list
})

const changeSettleSingsAction = (res) => ({
    type: actionTypes.CHANGE_SETTLE_SONGER,
    settleSings: res.artists
})

const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
});

const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.albums
})

const changeUpRankingAction = (res) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res));
            // console.log(res);
        })
    }
};

export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendAction(res));
            // console.log(res)
        })
    }
}

export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbums(limit).then(res => {
            // const albums = res.albums;
            dispatch(changeNewAlbumAction(res));
        })
    }
}

export const getTopListAction = (idx) => {
    return dispatch => {
        getTopList(idx).then(res => {
            switch (idx) {
                case 19723756:
                    dispatch(changeUpRankingAction(res));
                    // console.log(res);
                    break;
                case 3779629:
                    dispatch(changeNewRankingAction(res));
                    // console.log(res);
                    break;
                case 2884035:
                    dispatch(changeOriginRankingAction(res));
                    // console.log(res);
                    break;
                default:
                    console.log("其他数据处理");
            }
        });
    }
}

export const getSettleSingers = () => {
    return dispath => {
        getArtistList(5, 5001).then(res => {
            // console.log(res);
            dispath(changeSettleSingsAction(res))
        })
    }
}


export const getHotRadioAction = () => {
    return dispatch => {
        getHotRadio(5).then(res => {
            console.log(res);
            dispatch(changeHotRadioAction(res))
        })
    }
}