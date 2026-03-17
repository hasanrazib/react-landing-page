import React from 'react';
// Swiper React components import koro
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles import koro
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Required modules import koro
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <section className="slider-container" style={{ height: '500px', width: '100%' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        style={{ height: '100%' }}
      >
        <SwiperSlide>
          <div style={{ background: '#3498db', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <h1>Slide 1: Welcome to My Landing Page</h1>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div style={{ background: '#2ecc71', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <h1>Slide 2: Modern React Development</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ background: '#e74c3c', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <h1>Slide 3: Fast and Responsive</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;