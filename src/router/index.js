import React from 'react';
import { Redirect } from "react-router-dom";


// import BeiDiscover from "@/pages/discover";
// import BeiMine from "@/pages/mine";
// import BeiFriend from "@/pages/friend";
// import BeiRecommend from '../pages/discover/c-pages/recommend/index';
// import BeiRanking from '../pages/discover/c-pages/ranking/index';
// import BeiSongs from '../pages/discover/c-pages/songs';
// import BeiDjRadio from '../pages/discover/c-pages/djradio/index';
// import BeiArtist from '../pages/discover/c-pages/artist/index';
// import BeiAlbum from '../pages/discover/c-pages/album/index';
// import BeiPlayer from '../pages/player';

const BeiDiscover = React.lazy(() => import("@/pages/discover"));
const BeiRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const BeiRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const BeiSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const BeiDjRadio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const BeiArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const BeiAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
const BeiPlayer = React.lazy(_ => import("../pages/player"));

const BeiFriend = React.lazy(_ => import("../pages/friend"));
const BeiMine = React.lazy(_ => import("../pages/mine"));


const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/discover" />
        )
    },
    {
        path: "/discover",
        component: BeiDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path: "/discover/recommend",
                component: BeiRecommend
            },
            {
                path: "/discover/ranking",
                component: BeiRanking
            },
            {
                path: "/discover/songs",
                component: BeiSongs
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: BeiDjRadio
            },
            {
                path: "/discover/artist",
                component: BeiArtist
            },
            {
                path: "/discover/album",
                component: BeiAlbum
            },
            {
                path: "/discover/player",
                component: BeiPlayer
            },
        ]
    },
    {
        path: "/mine",
        component: BeiMine
    },
    {
        path: "/friend",
        component: BeiFriend,
    },
];

export default routes;