'use client'

import HomeTagPng from '@/public/images/home-tag.png'
import Image from 'next/image'
export default function Hook3() {
    return (
        <section className="relative">
            {/* Section content */}
            < div className="mt-[5rem] md:mt-[10rem] mx-5 md:mx-auto max-w-3xl md:flex md:flex-row md:items-center" >
                {/* Hook */}
                < div className="md:w-full mx-auto mb-10 md:mb-0" >
                    <div className="font-bold md:text-right text-2xl mb-[1.5rem] md:mb-[3rem]" data-aos="zoom-y-out">
                        Do you ever forget what a web page was about after saving it with a bookmark?
                    </div>
                    <div className="md:text-right text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="300">
                        Piazza allows you to save web pages with tags and memos.
                    </div>
                </div >
                {/* Img */}
                < div className="md:w-full" data-aos="zoom-y-out">
                    <Image className='md:w-img w-smimg max-md:mx-auto md:ml-auto' src={HomeTagPng} alt="Community Post Image" />
                </div >
            </div >
        </section>
    )
}