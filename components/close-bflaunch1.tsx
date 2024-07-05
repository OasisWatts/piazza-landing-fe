'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { PIAZZA_DOMAIN } from "./env";
import ButtonRouteWaitlistBfLaunch1 from "./buttons/button-routeWaitlist_bfLaunch1";


export default function CloseBfLaunch1() {
    const [emptyNum, setEmptyNum] = useState<number>(100)
    const [totalNum, setTotalNum] = useState<number>(100)
    useEffect(() => {
        axios.get(PIAZZA_DOMAIN + "/api/countWaitlist").then((res) => {
            const waitlistNum = res.data.count + 30
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
            <div className="mt-[3rem] md:mt-[7rem] mb-[3rem] md:mb-60 mx-5 md:mx-auto max-w-3xl text-center">
                <div className="text-sm md:text-xl text-base text-gray-700" data-aos="zoom-y-out">Coming Soon in August</div>
                <div className="text-sm md:text-xl text-gray-700 mb-[0.5rem] md:mb-[1.5rem]" data-aos="zoom-y-out">
                    <p className="inline text-brown font-black">{emptyNum}</p> spots left for the first <p className="inline text-darkviolet font-black">{totalNum}</p> users
                </div>
                <div data-aos="zoom-y-out" data-aos-delay="500">
                    <ButtonRouteWaitlistBfLaunch1 />
                </div>
            </div>
        </section >
    )
}