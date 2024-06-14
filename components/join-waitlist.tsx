'use client'

import ButtonRequestJoinWaitlist from "@/components/button-requestJoinWaitlist"
import ButtonRouteHome from "@/components/button-routeHome"
import PiazzaLogo from '@/components/ui/logo-piazza';
import { useState } from "react";

export default function JoinWaitlist() {
    const [emailtext, setEmailText] = useState<string>("")
    const [toggleAlert, setToggleAlert] = useState<boolean>(false)

    let handleOnChange = (e: any) => {
        setEmailText(e.currentTarget.value)
    }

    let requestJoinWaitlist = () => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(emailtext)) {
            setToggleAlert(false)
            console.log("alert", emailtext)
        } else {
            setToggleAlert(true)
            console.log("no alret", emailtext)
        }
    }
    return (
        <section className="relative">
            <div className="absolute top-5 right-5 md:w-0 md:h-0" data-aos="zoom-y-out">
                <PiazzaLogo height="35" />
            </div>
            <div className="pt-28 pb-40 mx-5 md:mx-auto max-w-2xl">
                <div className="mb-[5rem] md:mb-[8rem] max-md:w-0 max-md:h-0" data-aos="zoom-y-out">
                    <PiazzaLogo height="70" />
                </div>
                <div className="w-full mb-5" data-aos="zoom-y-out">
                    <label htmlFor="email" />
                    <input id="email" type="email" value={emailtext} onChange={handleOnChange} className="form-input rounded-lg w-full text-gray-800" placeholder="Enter your email address" required />
                </div>
                <div className="h-5 mb-5 text-red-500 text-base">
                    {toggleAlert ? "ⓘ Wrong Email Format" : ""}
                </div>
                <div className="w-full md:mx-auto content-start flex flex-col md:flex-row md:justify-between md:items-center" data-aos="zoom-y-out">
                    <ButtonRequestJoinWaitlist requestJoinWaitlist={requestJoinWaitlist} />
                    <ButtonRouteHome />
                </div>
            </div>
        </section>
    )
}