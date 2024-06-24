'use client'

import Image from "next/image"
import StudentImg from '@/public/images/student.jpeg'
import DesignerImg from '@/public/images/designer.jpg'
import ExpertImg from '@/public/images/expert.jpeg'


export default function Users1() {
    return (
        <section className='relative'>
            <div className="mt-[3rem] md:mt-[7rem] px-5 md:mx-auto max-w-5xl">
                <div className='text-center text-gray-800 font-bold leading-tighter tracking-tighter md:text-center text-xl md:text-3xl  mb-[2rem] md:mb-[3rem]'>
                    Who can gain the most benefit from the Piazza?
                </div>
                <div className="flex md:flex-row max-md:flex-col justify-between w-full">
                    <div className="rounded-lg md:w-[30%] max-md:mb-5 p-2 md:p-3 border-gray-300 border-2">
                        <div className="mb-2 md:mb-3">
                            <Image src={ExpertImg} alt="Student" className="w-[40%] rounded-full mx-auto" />
                        </div>
                        <p className="font-black text-lg sm:text-2xl text-center mb-2 rounded-lg text-white bg-gradient-to-r from-violet to-darkpink">
                            Experts
                        </p>
                        <p className="font-bold text-lg sm:text-lg mb-2 text-center">
                            Advance your expertise with ease
                        </p>
                        <div className="bg-white rounded-lg">
                            <div className="text-base">
                                <p className="inline text-violet">▶</p> Hashtag detailed web pages directly in your browser
                            </div>
                            <div className="text-base">
                                <p className="inline text-violet">▶</p> Note down insights instantly
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg md:w-[30%] max-md:mb-5 p-2 md:p-3 border-gray-300 border-2">
                        <div className="mb-2 md:mb-3">
                            <Image src={StudentImg} alt="Student" className="w-[40%] rounded-full mx-auto" />
                        </div>
                        <p className="font-black text-lg sm:text-2xl text-center mb-2 rounded-lg text-white bg-gradient-to-r from-violet to-darkpink">
                            Students
                        </p>
                        <p className="font-bold text-lg sm:text-lg mb-2 text-center">
                            Boost your online learning
                        </p>
                        <div className="bg-white rounded-lg">
                            <div className="text-base">
                                <p className="inline text-violet">▶</p> Save notes and tags on web pages to organize your learning
                            </div>
                            <div className="text-base">
                                <p className="inline text-violet">▶</p> Discuss the pages you visit with others
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg md:w-[30%] max-md:mb-5 p-2 md:p-3 border-gray-300 border-2">
                        <div className="mb-2 md:mb-3">
                            <Image src={DesignerImg} alt="Student" className="w-[40%] rounded-full mx-auto" />
                        </div>
                        <p className="font-black text-lg sm:text-2xl text-center mb-2 rounded-lg text-white bg-gradient-to-r from-violet to-darkpink">
                            Designers
                        </p>
                        <p className="font-bold text-lg sm:text-lg mb-2 text-center">
                            Optimize your creative workflow
                        </p>
                        <div className="bg-white rounded-lg">
                            <div className="text-base">
                                <p className="inline text-violet">▶</p> Neatly organize numerous reference web pages
                            </div>
                            <div className="text-base">
                                <p className="inline text-violet">▶</p> Capture memos for ideas inspired by your references
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}