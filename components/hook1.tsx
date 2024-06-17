'use client'

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

import BrowserImg from '@/public/images/browser.png'
import TagImg from '@/public/images/tag.png'
import HomeTagImg from '@/public/images/home-tag.png'

export default function Hook1() {
    return (
        <section className="relative">
            {/* Section content */}
            <div className="mt-[5rem] md:mt-[10rem] px-5 md:mx-auto max-w-5xl" >
                <div className="text-gray-800 font-extrabold leading-tighter tracking-tighter md:text-center text-2xl md:text-4xl mb-[1.5rem] md:mb-[3rem]">
                    The cleanest way to organize web pages
                </div>
                <div className="text-gray-700 text-base md:text-lg mb-[1rem] md:mb-[2rem] md:text-center" data-aos="zoom-y-out">
                    <p className="max-md:inline text-xl md:text-3xl font-bold mb-1">Q. </p>Struggling to find items in your bookmarks or <br />  dealing with too many screenshots to capture information from web pages?
                </div>
                <div className='md:flex md:flex-row md:items-center'>
                    <div className="md:w-full mx-auto text-gray-700 text-base md:text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="300">
                        <p className="max-md:inline text-xl md:text-3xl font-bold mb-1">A. </p>Use <p className="round-underline round-underline-lightviolet font-semibold text-black">tags</p> instead to save details more efficiently. You can <p className="round-underline round-underline-lightviolet font-semibold text-black">search for web pages more easily</p> using tags.
                    </div>
                    <div className='mx-auto px-2 md:px-10 md:w-1/2 max-md:max-w-[21rem]'>
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
                                    <Image className='mx-auto' src={TagImg} alt="Feature Image1" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='px-[4rem] pt-[4rem]'>
                                    <Image className='mx-auto' src={HomeTagImg} alt="Feature Image1" priority />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div >
        </section>
    )
}