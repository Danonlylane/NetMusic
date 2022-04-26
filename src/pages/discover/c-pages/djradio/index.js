import React, { memo } from 'react';

import BeiRadioCategory from './c-cpns/radio-category';
import BeiRadioRecommend from './c-cpns/radio-recommend';
import BeiRadioRanking from './c-cpns/radio-ranking';
import {
  DjRadioWrapper
} from "./style";

export default memo(function BeiDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <BeiRadioCategory />
      <BeiRadioRecommend />
      <BeiRadioRanking />
    </DjRadioWrapper>
  )
})
