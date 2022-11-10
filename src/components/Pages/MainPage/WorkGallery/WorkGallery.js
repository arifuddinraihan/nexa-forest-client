import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";


const WorkGallery = () => {
    return (
        <div className='bg-white dark:bg-white'>
            <div className='bg-white dark:bg-gray-900'>
                <div className=''>
                    <div className='container mx-auto grid grid-cols-1 content-between'>
                        <div className='py-12 mb-6'>
                            <div className="text-center">
                                <h1 className="text-xl md:text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                                    WE ALWAYS HAVE TIME FOR
                                    <br></br>
                                    DELIVERING YOU BEST EXPERIENCE</h1>
                                <p className="text-sm lg:text-lg max-w-screen-md px-2 md:px-8 lg:px-0 md:mx-auto mt-4 text-gray-500">
                                    We have added some of our research photography below. Take time and scroll them.
                                </p>
                            </div>
                        </div>
                        <div className=''>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkGallery;