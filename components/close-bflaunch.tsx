'use client'

import { useEffect, useState } from "react";
import ButtonDownload from "./buttons/button-download"
import ButtonRouteWaitlistBfLaunch from "./buttons/button-routeWaitlist_bfLaunch";
import ButtonGradient from "./buttons/button-routeWaitlist_bfLaunch"
import PiazzaLogo from '@/components/ui/logo-piazza';
import axios from "axios";
import { PIAZZA_DOMAIN } from "./env";


export default function CloseBfLaunch() {
    const [emptyNum, setEmptyNum] = useState<number>(100)
    const [totalNum, setTotalNum] = useState<number>(100)
    useEffect(() => {
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
            {/* Intro content */}
            <div className="pt-28 pb-40 md:pb-60 md:pt-40 mx-5 md:mx-auto max-w-3xl">
                {/* Section header */}
                <div className="md:text-center">
                    <h1 className=" text-2xl md:text-4xl leading-tighter tracking-tighter mb-[2rem] md:mb-[5rem] text-center font-extrabold" data-aos="zoom-y-out">
                        Enhance your web search experience with Piazza</h1>
                    <div className="text-xl md:text-2xl  mb-[2rem] md:mb-[5rem] text-center" data-aos="zoom-y-out" data-aos-delay="300">
                        Comming Soon in<br />July to August
                    </div>
                    <div className="text-base md:text-xl text-center text-gray-700 mb-[0.5rem] md:mb-[1.5rem]" data-aos="zoom-y-out">
                        <p className="inline text-brown font-black">{emptyNum}</p> spots left for the first <p className="inline text-darkviolet font-black">{totalNum}</p> users
                    </div>
                    <div className="max-w-xs mx-auto md:max-w-none content-start flex flex-col max-md:text-center" data-aos="zoom-y-out" data-aos-delay="300">
                        <ButtonRouteWaitlistBfLaunch />
                    </div>
                </div>
            </div>
        </section >
    )
}