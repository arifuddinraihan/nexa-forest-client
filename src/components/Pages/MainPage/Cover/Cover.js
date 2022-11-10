import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "./Cover.css"
import { Autoplay, Pagination, EffectFlip } from "swiper";
import img1 from "../../../assets/Cover-images/tree-pots.avif"
import img2 from "../../../assets/Cover-images/soil-plantation.avif"
import img3 from "../../../assets/Cover-images/photo-1603729336521-9bff55419157.avif"
import img4 from "../../../assets/Cover-images/kid-watering-tree.avif"
import { Link } from 'react-router-dom';


const Cover = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <Swiper
                className="md:rounded-xl mySwiper my-4"
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                effect={"flip"}
                grabCursor={true}
                modules={[Autoplay, Pagination, EffectFlip]}
            >
                <div className='container mx-auto'>
                    <SwiperSlide className=''>
                        <div className="relative w-full">
                            <div className='carousel-img'>
                                <img src={img1} className="w-full h-96 object-cover  rounded-xl" />
                            </div>
                            <div className="absolute flex flex-col justify-start transform -translate-y-1/2 left-3 md:left-24 top-1/2">
                                <h1 className='text-2xl md:text-4xl lg:text-5xl text-bold text-white'>
                                    We are
                                    <br className="" />
                                    NexaForest
                                    <br className="" />
                                    We deliver best online Plant Delivery
                                </h1>
                                <p className='my-8 w-1/2 text-white text-sm md:text-lg'>
                                    Our service always completed on time. We have some best customer experience, also we provide one of the best experiences to you.
                                </p>
                                <div className='flex flex-row flex-start gap-4'>
                                    <Link to={'/all-services'} className='btn btn-xs md:btn-md btn-outline btn-primary rounded-xl'>Discover More</Link>
                                    <Link to={'/blog'} className='btn btn-xs md:btn-md btn-outline btn-primary rounded-xl'>Read Blog</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="relative w-full">
                            <div className='carousel-img'>
                                <img src={img2} className="w-full h-96 object-cover  rounded-xl" />
                            </div>
                            <div className="absolute flex flex-col justify-start transform -translate-y-1/2 left-3 md:left-24 top-1/2">
                                <h1 className='text-2xl md:text-4xl lg:text-5xl text-bold text-white'>
                                    We are
                                    <br className="" />
                                    NexaForest
                                    <br className="" />
                                    We deliver best online Plant Delivery
                                </h1>
                                <p className='my-8 w-1/2 text-white text-sm md:text-lg'>
                                    Our service always completed on time. We have some best customer experience, also we provide one of the best experiences to you.
                                </p>
                                <div className='flex flex-row flex-start gap-4'>
                                    <Link to={'/all-services'} className='btn btn-xs md:btn-md btn-outline btn-primary rounded-xl'>Discover More</Link>
                                    <Link to={'/blog'} className='btn btn-xs md:btn-md btn-outline btn-primary rounded-xl'>Read Blog</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="relative w-full">
                            <div className='carousel-img'>
                                <img src={img3} className="w-full h-96 object-cover  rounded-xl" />
                            </div>
                            <div className="absolute flex flex-col justify-start transform -translate-y-1/2 left-3 md:left-24 top-1/2">
                                <h1 className='text-2xl md:text-4xl lg:text-5xl text-bold text-white'>
                                    We are
                                    <br className="" />
                                    NexaForest
                                    <br className="" />
                                    We deliver best online Plant Delivery
                                </h1>
                                <p className='my-8 w-1/2 text-white text-sm md:text-lg'>
                                    Our service always completed on time. We have some best customer experience, also we provide one of the best experiences to you.
                                </p>
                                <div className='flex flex-row flex-start gap-4'>
                                    <Link to={'/all-services'} className='btn btn-xs md:btn-md btn-outline btn-primary rounded-xl'>Discover More</Link>
                                    <Link to={'/blog'} className='btn btn-xs md:btn-md btn-outline btn-primary rounded-xl'>Read Blog</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="relative w-full">
                            <div className='carousel-img'>
                                <img src={img4} className="w-full h-96 object-cover  rounded-xl" />
                            </div>
                            <div className="absolute flex flex-col justify-start transform -translate-y-1/2 left-3 md:left-24 top-1/2">
                                <h1 className='text-2xl md:text-4xl lg:text-5xl text-bold text-white'>
                                    We are
                                    <br className="" />
                                    NexaForest
                                    <br className="" />
                                    We deliver best online Plant Delivery
                                </h1>
                                <p className='my-8 w-1/2 text-white text-sm md:text-lg'>
                                    Our service always completed on time. We have some best customer experience, also we provide one of the best experiences to you.
                                </p>
                                <div className='flex flex-row flex-start gap-4'>
                                    <Link to={'/all-services'} className='btn btn-xs md:btn-md btn-outline btn-primary rounded-xl'>Discover More</Link>
                                    <Link to={'/blog'} className='btn btn-xs md:btn-md btn-outline btn-primary rounded-xl'>Read Blog</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default Cover;