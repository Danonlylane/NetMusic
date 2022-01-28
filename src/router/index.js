import BeiDiscover from "@/pages/discover";
import BeiMine from "@/pages/mine";
import BeiFriend from "@/pages/friend";


const routes = [
    {
        path: "/",
        exact: true,
        component: BeiDiscover
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