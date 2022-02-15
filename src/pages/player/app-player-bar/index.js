import React, { memo, useState, useEffect, useRef, useCallback } from 'react'

import { Slider } from 'antd';

import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'

import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSongDetailAction } from '../store/actionCreators';
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils';

const BeiAppPlayerBar = memo(() => {
    // state and props
    const [currentTime, setcurrentTime] = useState(0);
    const [progress, setprogress] = useState(0);
    const [isChanging, setIsChanging] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // redux hooks
    const { currentSong } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"])
    }), shallowEqual)
    const dispatch = useDispatch();


    //other hooks
    const audioRef = useRef();
    useEffect(() => {
        dispatch(getSongDetailAction(167876));
    }, [dispatch])

    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
    }, [currentSong])

    const timeUpdate = (e) => {
        if (!isChanging) {
            setcurrentTime(e.target.currentTime * 1000)
            setprogress(currentTime / duration * 100);
        }
    }

    // other handle
    const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手"
    const duration = currentSong.dt || 0
    const showDuration = formatDate(duration, "mm:ss")
    const showCurrentTime = formatDate(currentTime, "mm:ss")
    // const progress = (currentTime / duration) * 100;


    // handle function
    const playMusic = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }

    const sliderChange = useCallback((value) => {
        // console.log("change", value);
        // progress = value;
        setIsChanging(true);
        const currentTime = value / 100 * duration;
        setcurrentTime(currentTime);
        setprogress(value);
    }, [duration])

    const sliderAfterChange = useCallback((value) => {
        const currentTime = value / 100 * duration / 1000;
        audioRef.current.currentTime = currentTime;
        setcurrentTime(currentTime * 1000);
        setIsChanging(false);

        if (!isPlaying) {
            playMusic();
        }
    }, [duration, isPlaying, playMusic])




    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content">
                <Control isPlaying={isPlaying}>
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play" onClick={(e) => playMusic()}></button>
                    <button className="sprite_player next"></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <a href="/todo">
                            <img src={getSizeImage(picUrl, 35)} alt="" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            <a href="/todo" className='singer-name'>{singerName}</a>
                        </div>
                        <div className="progress">
                            <Slider
                                defaultValue={30}
                                value={progress}
                                onChange={sliderChange}
                                onAfterChange={sliderAfterChange}
                            />
                            <div className="time">
                                <span className="now-time">{showCurrentTime}</span>
                                <span className="divider">/</span>
                                <span className="duration">{showDuration}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop"></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio
                ref={audioRef}
                onTimeUpdate={e => timeUpdate(e)}
            />
        </PlaybarWrapper>
    )
})

export default BeiAppPlayerBar