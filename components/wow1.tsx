import Image from "next/image";
import ScreenHashtagImg from "@/public/images/screen-hashtag.png"
import ScreenMemoImg from "@/public/images/screen-memo.png"
import ScreenCommunityImg from "@/public/images/screen-community.png"

export default function Wow1() {
    return (
        <section className="relative mt-[3rem] md:mt-[7rem]">
            <div className="mt-[3rem] md:mt-[7rem] mx-auto max-w-6xl mb-[3rem] md:mb-[6rem] px-5 flex flex-col items-center align-center text-center" data-aos="zoom-y-out">
                <h2 className="text-xl md:text-3xl font-bold">
                    84% of bookmarked URLs are not retrieved
                </h2>
                <div className="w-1 border-r-2 border-black h-[2rem] md:h-[4rem] my-3" />
                <h2 className="text-xl md:text-3xl font-bold">
                    Save smart: Use hashtags for easy access
                </h2>
                <p className="mt-[0.5rem] md:mt-[2rem] text-base md:text-lg font-md text-gray-700">
                    Save webpage with details and find easily <br className="sm:hidden" />in the Piazza mobile browser
                </p>
            </div>
            <div className="bg-gradient-to-r from-lightbrown to-pink w-full">
                <div className="px-5 md:max-w-4xl mx-auto">
                    <Image src={ScreenHashtagImg} alt="screen hashtag image" data-aos="zoom-y-out" />
                </div>
            </div>
            <div className="mt-[3rem] md:mt-[7rem] mx-auto max-w-6xl mb-[3rem] md:mb-[6rem] px-5 flex flex-col items-center align-center text-center" data-aos="zoom-y-out">
                <h2 className="text-xl md:text-3xl font-bold">
                    Short-term memory lasts only for 15 - 30 seconds
                </h2>
                <div className="w-1 border-r-2 border-black h-[2rem] md:h-[4rem] my-3" />
                <h2 className="text-xl md:text-3xl font-bold">
                    Capture ideas instantly with webpage notes
                </h2>
                <p className="mt-[0.5rem] md:mt-[2rem] text-base md:text-lg font-md text-gray-700">
                    Write directly on webpages<br className="sm:hidden" /> in the Piazza mobile browser
                </p>
            </div>
            <div className="bg-gradient-to-r from-lightyellow to-lightbrown w-full" data-aos="zoom-y-out">
                <div className="pb-5 md:pb-10 px-[4rem] md:max-w-3xl mx-auto">
                    <Image src={ScreenMemoImg} alt="screen hashtag image" />
                </div>
            </div>
            <div className="mt-[3rem] md:mt-[7rem] mx-auto max-w-6xl mb-[3rem] md:mb-[6rem] px-5 flex flex-col items-center align-center text-center" data-aos="zoom-y-out">
                <h2 className="text-xl md:text-3xl font-bold">
                    Read, Share, and Communicate Seamlessly
                </h2>
                <p className="mt-[0.5rem] md:mt-[2rem] text-base md:text-lg font-md text-gray-700">
                    Share webpages and thoughts<br className="sm:hidden" /> in the Piazza mobile browser
                </p>
            </div>
            <div className="bg-gradient-to-r  from-lightbrown to-lightviolet w-full" data-aos="zoom-y-out">
                <div className="px-5 md:max-w-4xl mx-auto">
                    <Image src={ScreenCommunityImg} alt="screen hashtag image" />
                </div>
            </div>

            <div className="mt-[3rem] md:mt-[7rem] mx-auto max-w-6xl mb-[3rem] md:mb-[6rem] px-5 flex flex-col items-center align-center text-center" data-aos="zoom-y-out">
                <h2 className="text-lg md:text-2xl text-center">
                    No need to switch apps to <br className="sm:hidden" /> organize data and share thoughts
                </h2>
            </div>
            <div className="bg-gradient-to-r from-lightyellow to-lightbrown" data-aos="zoom-y-out">
                <div className="mt-[3rem] md:mt-[7rem] mx-auto max-w-6xl mb-[3rem] md:mb-[6rem] px-5 flex flex-col items-center align-center text-center">
                    <p className="my-[0.5rem] md:my-[2rem] text-xl md:text-3xl font-bold text-center">
                        Optimize your Search: <br className="sm:hidden" /> Save, Organize, Share
                    </p>
                </div>
            </div>
        </section>
    )
}