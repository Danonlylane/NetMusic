import React, { memo } from 'react';

import BeiArtistCategory from './c-cpns/artist-category';
import BeiArtistList from './c-cpns/artist-list';
import { BeiArtistWrapper } from './style';

export default memo(function BeiArtist() {
  return (
    <BeiArtistWrapper>
      <div className="content wrap-v2">
        <BeiArtistCategory/>
        <BeiArtistList/>
      </div>
    </BeiArtistWrapper>
  )
})
