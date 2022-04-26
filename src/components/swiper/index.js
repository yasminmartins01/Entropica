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
      <SwiperSlide className="uno">Consoladores</SwiperSlide>
      <SwiperSlide className="dos">Vibradores</SwiperSlide>
      <SwiperSlide className="tres">Lenceria</SwiperSlide>
      <SwiperSlide className="cuatro">Accesorios</SwiperSlide>
      <SwiperSlide className="cinco">Aros</SwiperSlide>
      <SwiperSlide className="seis">Anales</SwiperSlide>
    </Swiper>
  </>
  );
}
