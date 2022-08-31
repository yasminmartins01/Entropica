import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import { Pagination } from "swiper";

export default function Swipper() {
  return (
    <>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide className="uno"></SwiperSlide>
      <SwiperSlide className="dos"></SwiperSlide>
      <SwiperSlide className="tres"></SwiperSlide>
      <SwiperSlide className="cuatro"></SwiperSlide>
    </Swiper>
  </>
  );
}
