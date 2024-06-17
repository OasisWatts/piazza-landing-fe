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
                <div className="text-gray-800 font-extrabold leading-tighter tracking-tighter md:text-center text-2xl md:text-4xl mb-[1.5rem] md:mb-[3rem]" data-aos="zoom-y-out">
                    A community right near you
                </div>
                <div className="text-gray-700 text-base md:text-lg mb-[1rem] md:mb-[5rem] md:text-center" data-aos="zoom-y-out">
                    <p className="max-md:inline text-xl md:text-3xl font-bold mb-1">Q. </p>Have you ever<p className="round-underline round-underline-lightbrown text-black"> feel like sharing what you read</p> on the web pages?
                </div>
                <div className="text-gray-700 text-base md:text-lg md:mb-[2rem]" data-aos="zoom-y-out">
                    <p className="round-underline round-underline-lightbrown text-black"> Share your thoughts with people immediately </p>after using web pages. We are planning to develope auto-created communities based on memos and tags. This would allow you to connect with people who share your interests without having to search for communities. As more people use the app, the precision of these communities could improve.
                </div>
                < div className="md:w-1/2 mx-auto px-2 md:px-10 max-md:max-w-[21rem]" data-aos="zoom-y-out" data-aos-delay="300">
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
                            <div className='px-[4rem] pt-[4rem] pb-10'>
                                <Image className='mx-auto' src={BrowserImg} alt="Feature Image1" priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem] pb-10'>
                                <Image className='mx-auto' src={Community0Img} alt="Feature Image2" priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem] pb-10'>
                                <Image className='mx-auto' src={Community1Img} alt="Feature Image3" priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem] pb-10'>
                                <Image className='mx-auto' src={PostImg} alt="Feature Image4" priority />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div >
            </div >
        </section>
    )
}