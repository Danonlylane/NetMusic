import React, { memo } from 'react';

import BeiHotAlbum from './c-cpns/hot-album';
import BeiTopAlbum from './c-cpns/top-album';
import {
  AblumWrapper
} from './style';

export default memo(function BeiAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <BeiHotAlbum/>
      <BeiTopAlbum/>
    </AblumWrapper>
  )
})
