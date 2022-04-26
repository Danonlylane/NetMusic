import React, { memo } from 'react'

import {
    PlayerWrapper,
    PlayerLeft,
    PlayerRight
} from './style'

const BeiPlayer = memo(() => {
    return (
        <PlayerWrapper>
            <div className="content wrap-v2">
                <PlayerLeft>
                    <h2>BeiPlayInfo</h2>
                    <h2>BeiSongContent</h2>
                </PlayerLeft>
                <PlayerRight>
                    <h2>BeiSimiPlayList</h2>
                    <h2>BeiSimiSong</h2>
                    <h2>BeiDownload</h2>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})


export default BeiPlayer

