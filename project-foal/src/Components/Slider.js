import React from 'react';
import './Slider.css';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <section className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="swiper-full"
      >
        <SwiperSlide>
          <div className="slide slide-1">
            <h1>Slide 1: Welcome to My Landing Page</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide-2">
            <h1>Slide 2: Modern React Development</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide-3">
            <h1>Slide 3: Fast and Responsive</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;