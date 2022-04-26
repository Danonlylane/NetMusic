import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';


import BeiThemeHeaderNormal from '@/components/theme-header-normal';
import BeiAlphaList from './c-cpns/alpha-list';
import BeiArtistItem from './c-cpns/artist-item';
import {
  ArtistListWrapper
} from './style';

export default memo(function BeiArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <BeiThemeHeaderNormal title={currentType.name} />
      <BeiAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <BeiArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
