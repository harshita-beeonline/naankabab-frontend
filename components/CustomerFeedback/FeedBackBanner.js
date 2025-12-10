import React from 'react';
import styles from '../../styles/FeedBackBanner.module.scss';
import feedbackbanner from '../../public/images/feedbackbanner.png';
import Image from 'next/image';

const FeedBackBanner = () => {
  return (
    <div className={styles["feedback-banner-section"]}>
      <div className={styles["feedback-banner-image"]}>
        <Image src={feedbackbanner} alt='img'/>
      </div>
    </div>
  )
}

export default FeedBackBanner
