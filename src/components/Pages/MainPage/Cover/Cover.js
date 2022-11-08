import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";



const Cover = () => {
    return (
        <div className='my-5 py-56'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='text-center'>Slide 1</SwiperSlide>
                <SwiperSlide className='text-center'>Slide 2</SwiperSlide>
                <SwiperSlide className='text-center'>Slide 3</SwiperSlide>
                <SwiperSlide className='text-center'>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Cover;