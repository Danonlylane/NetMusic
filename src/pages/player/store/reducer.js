import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
    playList: [
        {
            "name": "有何不可",
            "id": 167876,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 5771,
                    "name": "许嵩",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "600902000007916021",
            "fee": 8,
            "v": 49,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 16953,
                "name": "自定义",
                "picUrl": "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
                "tns": [],
                "pic_str": "18590542604286213",
                "pic": 18590542604286212
            },
            "dt": 241840,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9675799,
                "vd": -21099
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5805497,
                "vd": -18400
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3870346,
                "vd": -16900
            },
            "a": null,
            "cd": "1",
            "no": 3,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 2,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "mst": 9,
            "cp": 14026,
            "rtype": 0,
            "rurl": null,
            "publishTime": 1231516800000
        },
        {
            "name": "雅俗共赏",
            "id": 411214279,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 5771,
                    "name": "许嵩",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": null,
            "fee": 8,
            "v": 31,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 34749138,
                "name": "青年晚报",
                "picUrl": "https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
                "tns": [],
                "pic": 3431575794705764
            },
            "dt": 249621,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9987177,
                "vd": -22200
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5992323,
                "vd": -19600
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3994896,
                "vd": -17800
            },
            "a": null,
            "cd": "1",
            "no": 2,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 5302271,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 14026,
            "publishTime": 1461723397683
        },
        {
            "name": "爱不单行",
            "id": 26082851,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 3694,
                    "name": "罗志祥",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [
                "偶像剧《海派甜心》插曲"
            ],
            "pop": 100,
            "st": 0,
            "rt": "600902000008119184",
            "fee": 8,
            "v": 35,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 2379124,
                "name": "罗生门",
                "picUrl": "https://p2.music.126.net/W59PIBDPJe-tR6I60wY18Q==/109951165594703708.jpg",
                "tns": [],
                "pic_str": "109951165594703708",
                "pic": 109951165594703710
            },
            "dt": 280920,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 11238966,
                "vd": -64153
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 6743397,
                "vd": -61601
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 4495613,
                "vd": -59961
            },
            "a": null,
            "cd": "1",
            "no": 7,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 35,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 7003,
            "publishTime": 1263484800007
        }
    ],
    currentSongIndex: 0,
    currentSong: {},
    sequence: 0, // 0 循环 1 随机 2 单曲
    lyricList: [],
    currentLyricIndex: 0
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.playList);
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.index);
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence", action.sequence);
        case actionTypes.CHANGE_LYRIC_LIST:
            return state.set("lyricList", action.lyricList);
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.index);
        default:
            return state;
    }
}

export default reducer;

