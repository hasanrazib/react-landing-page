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
    <section className="slider-container" id="home">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="swiper-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide slide-1">
            <div className="slide-content">
              <h1>Web Development</h1>
              <p>
                We build fast, responsive, and modern websites using the latest technologies.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide slide-2">
            <div className="slide-content">
              <h1>UI/UX Design</h1>
              <p>
                Clean design, engaging visuals, and user-friendly experiences across all devices.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slide slide-3">
            <div className="slide-content">
              <h1>Digital Strategy</h1>
              <p>
                Grow your brand with smart digital solutions and effective strategies.
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Slider;