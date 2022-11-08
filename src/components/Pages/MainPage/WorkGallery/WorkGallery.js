import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";


const WorkGallery = () => {
    return (
        <>
            <Swiper
                className="xl:rounded-xl mySwiper my-4"
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
            >
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1441&q=80" className='object-cover w-full h-96' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1425&q=80" className='object-cover w-full h-96' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className='object-cover w-full h-96' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className='object-cover w-full h-96' />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default WorkGallery;