import request from './request';

export function getTopBanners() {
    return request({
        url: "/banner"
    })
}

export function getHotRecommends(limit) {
    return request({
        url: "/personalized",
        params: {
            limit,
        }
    })
}

export function getNewAlbums(limit) {
    return request({
        // 22.02.22日，发现接口已经改变
        // url: "/top/album",
        url: "/album/newest",
        params: {
            limit
        }
    })
}

export function getTopList(id) {
    return request({
        url: "/playlist/detail",
        // url: "/top/list",
        params: {
            id
        }
    })
}

export function getArtistList(limit, cat) {
    return request({
        url: "/artist/list",
        params: {
            cat,
            limit
        }
    })
}


export function getHotRadio(limit) {
    return request({
        url: "/dj/toplist/popular",
        params: {
            limit
        }
    })
}