import React, { useRef, useState } from "react";


import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./index.css";


export default function Swipper() {
  return (
    <>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="uno"> Consoladores </SwiperSlide>
      <SwiperSlide className="dos"> Vibradores </SwiperSlide>
      <SwiperSlide className="tres"> Lenceria  </SwiperSlide>
      <SwiperSlide className="cuatro"> Accesorios </SwiperSlide>
      <SwiperSlide className="cinco"> Aros </SwiperSlide>
      <SwiperSlide className="seis"> Anales </SwiperSlide>
     
    </Swiper>
  </>
  );
}
