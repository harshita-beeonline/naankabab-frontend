"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/OurStoryCards.module.scss";
import storycard1 from "../../public/images/storycard1.jpg";
import storycard2 from "../../public/images/storycard2.jpg";
import storycard3 from "../../public/images/storycard3.jpg";
import storycard4 from "../../public/images/storycard4.jpg";
import top1 from "../../public/images/top1.svg";
import bottom1 from "../../public/images/bottom1.svg";
import top2 from "../../public/images/top2.svg";
import bottom2 from "../../public/images/bottom2.svg";
import top3 from "../../public/images/top3.svg";
import bottom3 from "../../public/images/bottom3.svg";
import top4 from "../../public/images/top4.svg";
import bottom4 from "../../public/images/bottom4.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const OurStoryCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  const timeoutRef = useRef(null);

  const storyCardData = [
    {
      image: storycard1,
      title: "MADE\nMODERN",
      top: top1,
      bottom: bottom1,
      hoverColor: "#E30450",
    },
    {
      image: storycard2,
      title: "PEOPLE\nPOWERED",
      top: top2,
      bottom: bottom2,
      hoverColor: "#A03E95",
    },
    {
      image: storycard3,
      title: "HEART\nSHARED",
      top: top3,
      bottom: bottom3,
      hoverColor: "#00ACA7",
    },
    {
      image: storycard4,
      title: "TOGETHER\nRISING",
      top: top4,
      bottom: bottom4,
      hoverColor: "#F16F26",
    },
  ];
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 576);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const triggerActiveForIndex = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveIndex(null);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
      timeoutRef.current = null;
    }, 1000);
  };
  const handleOnSwiper = (swiper) => {
    swiperRef.current = swiper;
    const idx =
      typeof swiper.realIndex === "number"
        ? swiper.realIndex
        : swiper.activeIndex;
    triggerActiveForIndex(idx);
  };
  const handleSlideChange = (swiper) => {
    const idx =
      typeof swiper.realIndex === "number"
        ? swiper.realIndex
        : swiper.activeIndex;
    triggerActiveForIndex(idx);
  };
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className={styles["our-story-all-cards"]}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        onSwiper={isMobile ? handleOnSwiper : undefined}
        onSlideChange={isMobile ? handleSlideChange : undefined}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {storyCardData.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`${styles["story-main-card"]} ${
              activeIndex === index ? styles["active"] : ""
            }`}
            style={{
              backgroundImage: `url(${item.image.src})`,
              "--hover-color": item.hoverColor,
            }}
          >
            <div className={styles["top-icon"]}>
              <Image src={item.top} alt="top decoration" />
            </div>
            <h4>{item.title}</h4>
            <div className={styles["bottom-icon"]}>
              <Image src={item.bottom} alt="bottom decoration" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurStoryCards;
