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
                <SwiperSlide className='text-4xl min-h-screen'>
                    <div className="relative w-full rounded-xl">
                        <div className='carousel-img'>
                            <img src={img1} className="w-full" />
                        </div>
                        <div className="absolute flex flex-col justify-start transform -translate-y-1/2 left-3 md:left-24 top-1/2">
                            <h1 className='text-2xl md:text-4xl lg:text-5xl text-bold text-white'>
                                Affordable
                                <br />
                                Price For Car
                                <br />
                                Servicing
                            </h1>
                            <p className='my-8 w-1/2 text-white hidden md:block'>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className='flex flex-col md:flex-row flex-start gap-4'>
                                <button className='btn btn-sm md:btn-lg btn-outline btn-warning rounded-xl'>Discover More</button>
                                <button className='btn btn-sm md:btn-lg btn-outline btn-warning rounded-xl'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='text-4xl min-h-screen'>
                    <div className="relative w-full">
                        <div className='carousel-img'>
                            <img src={img2} className="w-full rounded-xl" />
                        </div>
                        <div className="absolute flex flex-col justify-start transform -translate-y-1/2 left-3 md:left-24 top-1/2">
                            <h1 className='text-2xl md:text-4xl lg:text-5xl text-bold text-white'>
                                Affordable
                                <br />
                                Price For Car
                                <br />
                                Servicing
                            </h1>
                            <p className='my-8 w-1/2 text-white hidden md:block'>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className='flex flex-col md:flex-row flex-start gap-4'>
                                <button className='btn btn-sm md:btn-lg btn-outline btn-warning rounded-xl'>Discover More</button>
                                <button className='btn btn-sm md:btn-lg btn-outline btn-warning rounded-xl'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='text-4xl min-h-screen'>
                    <div className="relative w-full">
                        <div className='carousel-img'>
                            <img src={img3} className="w-full rounded-xl" />
                        </div>
                        <div className="absolute flex flex-col justify-start transform -translate-y-1/2 left-3 md:left-24 top-1/2">
                            <h1 className='text-2xl md:text-4xl lg:text-5xl text-bold text-white'>
                                Affordable
                                <br />
                                Price For Car
                                <br />
                                Servicing
                            </h1>
                            <p className='my-8 w-1/2 text-white hidden md:block'>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className='flex flex-col md:flex-row flex-start gap-4'>
                                <button className='btn btn-sm md:btn-lg btn-outline btn-warning rounded-xl'>Discover More</button>
                                <button className='btn btn-sm md:btn-lg btn-outline btn-warning rounded-xl'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='text-4xl min-h-screen'>
                    <div className="relative w-full">
                        <div className='carousel-img'>
                            <img src={img4} className="w-full rounded-xl" />
                        </div>
                        <div className="absolute flex flex-col justify-start transform -translate-y-1/2 left-3 md:left-24 top-1/2">
                            <h1 className='text-2xl md:text-4xl lg:text-5xl text-bold text-white'>
                                Affordable
                                <br />
                                Price For Car
                                <br />
                                Servicing
                            </h1>
                            <p className='my-8 w-1/2 text-white hidden md:block'>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className='flex flex-col md:flex-row flex-start gap-4'>
                                <button className='btn btn-sm md:btn-lg btn-outline btn-warning rounded-xl'>Discover More</button>
                                <button className='btn btn-sm md:btn-lg btn-outline btn-warning rounded-xl'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Cover;