'use client'

import { useEffect, useState } from "react";
import ButtonDownload from "./buttons/button-download"
import ButtonRouteWaitlistBfLaunch from "./buttons/button-routeWaitlist_bfLaunch";
import ButtonGradient from "./buttons/button-routeWaitlist_bfLaunch"
import PiazzaLogo from '@/components/ui/logo-piazza';
import { PIAZZA_DOMAIN } from "./env";
import axios from "axios";


export default function IntroBfLanch() {
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
        <section className="relative">
            <div className="absolute top-5 right-5 md:w-0 md:h-0" data-aos="zoom-y-out">
                <PiazzaLogo height="35" />
            </div>
            {/* Intro content */}
            <div className="max-md:pt-[5rem] md:mx-auto max-w-6xl px-5 min-h-[100vh] my-auto flex flex-row items-center md:justify-between align-center">
                {/* Section header */}
                <div className="mb-[4rem] max-md:w-0 max-md:h-0 md:mr-10" data-aos="zoom-y-out">
                    <PiazzaLogo height="80" />
                </div>
                <div className="">
                    <h1 className="text-3xl md:text-6xl font-extrabold   leading-tighter tracking-tighter mb-[1rem] md:mb-[3rem] text-black" data-aos="zoom-y-out">
                        Organize Your Search, <br /> Share Your Thoughts
                        {/* Enhance<br />Mobile Web Search<br />Experience */}</h1>
                    <div className="text-lg md:text-2xl   text-gray-700 mb-[1rem] md:mb-[3rem]" data-aos="zoom-y-out">
                        The mobile browser you need <br /> to upgrade your search experience
                    </div>
                    <div className="text-base md:text-xl   text-gray-700 mb-[0.5rem] md:mb-[1.5rem]" data-aos="zoom-y-out">
                        <p className="inline text-brown font-black">{emptyNum}</p> spots left for the first <p className="inline text-darkviolet font-black">{totalNum}</p> users
                    </div>
                    <div className="mb-[0.5rem] md:mb-[1rem] max-w-xs md:mx-auto md:max-w-none content-start" data-aos="zoom-y-out" data-aos-delay="300">
                        <ButtonRouteWaitlistBfLaunch />
                    </div>
                    <div className="  max-md:mb-[4rem] md:text-lg text-base text-gray-700" data-aos="zoom-y-out">Comming Soon in July to August</div>
                </div>
            </div>
        </section >
    )
}