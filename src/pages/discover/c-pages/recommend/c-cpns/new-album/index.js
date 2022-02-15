import React, { memo, useEffect, useRef } from 'react'

import BeiThemeHeaderRCM from '@/components/theme-header-rcm'
import { getNewAlbumAction } from '../../store/actionCreators'
import { AlbumWrapper } from './style'
import { Carousel } from 'antd'


import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import BeiAlbumCover from '@/components/album-cover'

const BeiNewAlbum = memo(() => {

    //redux hooks
    const { newAlbums } = useSelector((state) => ({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual)
    const dispatch = useDispatch();

    // other hooks
    const pageRef = useRef();
    useEffect(() => {
        dispatch(getNewAlbumAction(10));
    }, [dispatch])

    return (
        <AlbumWrapper>
            <BeiThemeHeaderRCM title="新碟上架" />
            <div className="content">
                <button className="arrow arrow-left sprite_02"
                    onClick={e => pageRef.current.prev()}></button>
                <div className="album">
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0, 1].map((item) => {
                                return (
                                    <div className="page" key={item}>
                                        {
                                            newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                                                return <BeiAlbumCover
                                                    key={iten.id}
                                                    info={iten}
                                                    size={100}
                                                    width={118}
                                                    bgp="-570px "
                                                >{iten.name}</BeiAlbumCover>

                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02"
                    onClick={e => pageRef.current.next()}></button>
            </div>
        </AlbumWrapper>
    )
})

export default BeiNewAlbum