'use client'

import { useEffect, useState } from "react";
import { PIAZZA_DOMAIN } from "./env";
import axios from "axios";
import ButtonRouteWaitlistBfLaunch1 from "./buttons/button-routeWaitlist_bfLaunch1";
import Image from "next/image";
import BottomBarImg from "@/public/images/bottom-bar.jpg"


export default function IntroBfLanch1() {
    const [emptyNum, setEmptyNum] = useState<number>(100)
    const [totalNum, setTotalNum] = useState<number>(100)
    useEffect(() => {
        axios.get(PIAZZA_DOMAIN + "/api/visit")
        axios.get(PIAZZA_DOMAIN + "/api/countWaitlist").then((res) => {
            const waitlistNum = res.data.count
            let totalNum, emptyNum
            if (waitlistNum < 1000) {
                totalNum = Math.floor(waitlistNum / 100) * 100 + 100
                emptyNum = totalNum - waitlistNum
            } else {
                totalNum = Math.floor(waitlistNum / 1000) * 1000 + 1000
                emptyNum = totalNum - waitlistNum
            }
            console.log(res, waitlistNum, totalNum, emptyNum)
            setEmptyNum(emptyNum)
            setTotalNum(totalNum)
        })
    }, [])

    return (
        <section className="relative mt-[7rem]">
            {/* Intro content */}
            <div className="mx-auto max-w-6xl flex flex-col items-center align-center text-center">
                <h1 className="text-3xl md:text-6xl font-extrabold   leading-tighter tracking-tighter mb-[1rem] md:mb-[3rem] text-black" data-aos="zoom-y-out">
                    Organize Your Search, <br /> Share Your Thoughts
                    {/* Enhance<br />Mobile Web Search<br />Experience */}</h1>
                <div className="text-base md:text-xl text-gray-700 mb-[2rem] md:mb-[4rem]" data-aos="zoom-y-out">
                    The mobile browser you need to <br className="sm:hidden" /> upgrade your search experience
                </div>
                <div className=" mb-[0.5rem] md:mb-[1.5rem] px-10" data-aos="zoom-y-out">
                    <Image src={BottomBarImg} alt="mobile screen bottom bar image" />
                </div>
                <div className="text-sm md:text-xl text-base text-gray-700" data-aos="zoom-y-out" data-aos-delay="300">Comming Soon in August</div>
                <div className="text-sm md:text-xl text-gray-700 mb-[0.5rem] md:mb-[1.5rem]" data-aos="zoom-y-out" data-aos-delay="300">
                    <p className="inline text-brown font-black">{emptyNum}</p> spots left for the first <p className="inline text-darkviolet font-black">{totalNum}</p> users
                </div>
                <div data-aos="zoom-y-out" data-aos-delay="300">
                    <ButtonRouteWaitlistBfLaunch1 />
                </div>
            </div>
        </section >
    )
}