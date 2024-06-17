'use client'

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import BrowserImg from '@/public/images/browser.png'
import Community0Img from '@/public/images/community-0.png'
import Community1Img from '@/public/images/community-1.png'
import PostImg from '@/public/images/post.png'


import Image from 'next/image'
export default function Hook3() {
    return (
        <section className="relative">
            {/* Section content */}
            <div className="mt-[5rem] md:mt-[10rem] px-5 md:mx-auto max-w-5xl" >
                <div className="text-gray-800 font-extrabold leading-tighter tracking-tighter md:text-center text-2xl md:text-4xl mb-[1.5rem] md:mb-[3rem]">
                    A community right near you
                </div>
                <div className="text-gray-700 text-base md:text-lg md:mb-[2rem]" data-aos="zoom-y-out">
                    Share your thoughts with people immediately after using web pages. We are planning to develope auto-created communities based on memos and tags. This would allow you to connect with people who share your interests without having to search for communities. As more people use the app, the precision of these communities could improve.
                </div>
                < div className="md:w-1/2 mx-auto px-2 md:px-10 max-md:max-w-[21rem]" data-aos="zoom-y-out">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={100}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem]'>
                                <Image className='mx-auto' src={BrowserImg} alt="Feature Image1" priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem]'>
                                <Image className='mx-auto' src={Community0Img} alt="Feature Image2" priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem]'>
                                <Image className='mx-auto' src={Community1Img} alt="Feature Image3" priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem]'>
                                <Image className='mx-auto' src={PostImg} alt="Feature Image4" priority />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div >
            </div >
        </section>
    )
}