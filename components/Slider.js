import people from "../teammembers.json";

import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import classes from "./../styles/styles.module.scss";
import classes from "../styles/TeamMembers.module.scss";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const myLoader = ({ src }) => {
  return src;
};

export default function App() {
  return (
    // <>
    //     <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
    //         "rotate": 50,
    //         "stretch": 0,
    //         "depth": 100,
    //         "modifier": 1,
    //         "slideShadows": true
    //     }} pagination={true} navigation className={classes.mySwiper}>
    //         <SwiperSlide className={classes['swiper-slide']}><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
    //         <SwiperSlide className={classes['swiper-slide']}><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
    //         <SwiperSlide className={classes['swiper-slide']}><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>

    //     </Swiper>
    // </>
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className={classes.mySwiper}
      >
        {/* iznad stavi navigation i vidi kako se mjenja boja buttona */}

        {people.map((member) => (
          <SwiperSlide key={member.id} className={classes["swiper-slide"]}>
            <div className={classes.divSlide}>
              <Image
                layout="responsive"
                loader={myLoader}
                src={member.image}
                width={250}
                height={250}
                alt="member"
              />
              <h2>{member.name}</h2>
              <p>
                a sonzjcsbakasbadjsabdjkas aksjdbnkajb djasdsa
                dasdasdljasdalsjbdlajsbdas sa dlabsdas
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
