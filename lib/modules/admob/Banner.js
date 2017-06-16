import React from 'react';
import AdMobComponent from './AdMobComponent';

function Banner({ ...props }) {
  return (
    <AdMobComponent
      {...props}
      class={'RNFirebaseAdMobBanner'}
    />
  );
}

Banner.propTypes = AdMobComponent.propTypes;

Banner.defaultProps = {
  unitId: 'ca-app-pub-3940256099942544/2177258514',
  size: 'SMART_BANNER',
};

export default Banner;