import React from 'react';
import styles from '../../styles/OurLocationBanner.module.scss';
import Image from 'next/image';
import ourlocationbanner from '../../public/images/ourlocationbanner.png';

const OurLocationBanner = () => {
  return (
    <div className={styles["our-location-banner"]}>
     <div className={styles["our-location-image"]}>
        <Image src={ourlocationbanner} alt='img'/>
     </div>
      <button>Locations</button>
    </div>
  )
}

export default OurLocationBanner
