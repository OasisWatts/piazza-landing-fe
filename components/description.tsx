'use client'

import BrowserDescriptionImg from '@/public/images/browser-description.png'
import BrowserDescriptionSmallImg from '@/public/images/browser-description-sm.png'
import CirclePenImg from '@/public/images/circle-pen.png'
import CircleTagImg from '@/public/images/circle-tag.png'
import CirclePeopleImg from '@/public/images/circle-people.png'
import Image from 'next/image'


export default function Description() {
    return (
        <section className="relative">
            < div className="mx-auto max-w-3xl max-md:hidden" data-aos="zoom-y-out">
                <Image className='' src={BrowserDescriptionImg} alt="Screen Description Image" data-aos="zoom-y-out" />
                <div className='absolute top-[27rem] left-[3rem] text-lg text-center'>Write memos<br />on a web page</div>
                <div className='absolute top-[19rem] right-[2.5rem] text-lg text-center'>Discuss about<br />the web pages</div>
                <div className='absolute top-[13rem] left-[3rem] text-lg text-center'>Save a web page<br />with tags</div>
                <div className='absolute top-[36.5rem] left-[19rem] text-lg italic'>Writing space is provided<br /> within every web page</div>
            </div >
            < div className="pb-16 mx-5 max-w-3xl md:hidden" data-aos="zoom-y-out">
                <Image className='w-lbtn text-center mx-auto' src={BrowserDescriptionSmallImg} alt="Screen Description Image" data-aos="zoom-y-out" />
                <div className='text-center text-base relative bottom-[4.5rem] left-[1rem] italic'>Writing space is provided<br />within every web page</div>
                <Image className='w-smimg text-center mx-auto mb-3' src={CirclePenImg} alt="Pen Image" data-aos="zoom-y-out" />
                <div className='text-lg text-center'>Write memos<br />on a web page</div>
                <Image className='w-smimg text-center mx-auto mb-3 mt-16' src={CirclePeopleImg} alt="People Image" data-aos="zoom-y-out" />
                <div className='text-lg text-center'>Discuss about<br />the web pages</div>
                <Image className='w-smimg text-center mx-auto mb-3 mt-16' src={CircleTagImg} alt="Tag Image" data-aos="zoom-y-out" />
                <div className='text-lg text-center'>Save a web page<br />with tags</div>
            </div >
        </section >
    )
}