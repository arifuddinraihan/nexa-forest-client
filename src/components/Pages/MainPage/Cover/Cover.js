import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "./Cover.css"
import { Pagination, EffectFlip } from "swiper";


const Cover = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <Swiper
                className="xl:rounded-xl mySwiper my-4"
                pagination={{
                    clickable: true,
                }}
                spaceBetween={30}
                effect={"flip"}
                grabCursor={true}
                modules={[Pagination , EffectFlip]}
            >
                <SwiperSlide className='text-4xl min-h-screen'>
                    <img src='https://images.unsplash.com/photo-1603729336521-9bff55419157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
                </SwiperSlide>
                <SwiperSlide className='text-4xl min-h-screen'>
                    <img src='https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
                </SwiperSlide>
                <SwiperSlide className='text-4xl min-h-screen'>
                    <img src='https://images.unsplash.com/photo-1611843467160-25afb8df1074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
                </SwiperSlide>
                <SwiperSlide className='text-4xl min-h-screen'>
                    <img src='https://images.unsplash.com/photo-1611735341450-74d61e660ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'></img>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Cover;