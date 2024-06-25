import Image from "next/image";
import ScreenHashtagImg from "@/public/images/screen-hashtag.png"
import ScreenMemoImg from "@/public/images/screen-memo.png"
import ScreenCommunityImg from "@/public/images/screen-community.png"

export default function Wow1() {
    return (
        <section className="relative mt-[3rem] md:mt-[7rem]">
            <div className="bg-lightviolet py-1">
                <div className="mt-[3rem] md:mt-[7rem] mx-auto max-w-6xl mb-[3rem] md:mb-[6rem] px-5 flex flex-col items-center align-center text-center" data-aos="zoom-y-out">
                    <h2 className="text-xl md:text-3xl font-bold">
                        Read, Share, and Communicate Seamlessly
                    </h2>
                    <p className="mt-[0.5rem] md:mt-[2rem] text-base md:text-lg font-md text-gray-700">
                        No need to find a place to share webpages.
                        <br />
                        Instantly discuss webpage on your mobile browser.
                    </p>
                </div>
            </div>
            <div className="bg-gray-100 w-full" data-aos="zoom-y-out">
                <div className="px-5 md:max-w-4xl mx-auto">
                    <Image src={ScreenCommunityImg} alt="screen hashtag image" />
                </div>
            </div>
            <div className="bg-gradient-to-r from-lightbrown to-lightyellow py-1">
                <div className="mt-[3rem] md:mt-[7rem] mx-auto max-w-6xl mb-[3rem] md:mb-[6rem] px-5 flex flex-col items-center align-center text-center" data-aos="zoom-y-out">
                    <h2 className="text-xl md:text-3xl font-semibold">
                        Short-term memory lasts only for 15 - 30 seconds
                    </h2>
                    <div className="w-1 border-r-2 border-black h-[2rem] md:h-[4rem] my-3" />
                    <h2 className="text-xl md:text-3xl font-bold">
                        Organize webpages on mobile web browser
                    </h2>
                </div>
            </div>
            <div className="mt-[3rem] md:mt-[7rem] mx-auto max-w-6xl mb-[3rem] md:mb-[6rem] px-5 flex flex-col items-center align-center text-center" data-aos="zoom-y-out">
                <h2 className="text-xl md:text-3xl font-bold">
                    Capture ideas instantly by writing directly on webpages
                </h2>
                <p className="mt-[0.5rem] md:mt-[2rem] text-base md:text-lg font-md text-gray-700">
                    No need to switch apps.
                    <br />
                    Quickly jot down your thoughts on webpages and easily access them later.
                </p>
            </div>
            <div className="bg-gradient-to-r from-lightbrown to-pink w-full" data-aos="zoom-y-out">
                <div className="pb-5 md:pb-10 px-[4rem] md:max-w-3xl mx-auto">
                    <Image src={ScreenMemoImg} alt="screen hashtag image" />
                </div>
            </div>
            <div className="mt-[3rem] md:mt-[7rem] mx-auto max-w-6xl mb-[3rem] md:mb-[6rem] px-5 flex flex-col items-center align-center text-center" data-aos="zoom-y-out">
                <h2 className="text-xl md:text-3xl font-semibold">
                    84% of bookmarked URLs are not retrieved
                </h2>
                <div className="w-1 border-r-2 border-black h-[2rem] md:h-[4rem] my-3" />
                <h2 className="text-xl md:text-3xl font-bold">
                    Never Lose a Link: Handle Numerous Webpages with Hashtags
                </h2>
                <p className="mt-[0.5rem] md:mt-[2rem] text-base md:text-lg font-md text-gray-700">
                    Bookmark is not for managing numerous webpages and remembering its contents.
                    <br />
                    Use hashtags instead, and organize many webpages.
                </p>
            </div>
            <div className="bg-gradient-to-r from-lightbrown to-pink w-full">
                <div className="px-5 md:max-w-4xl mx-auto">
                    <Image src={ScreenHashtagImg} alt="screen hashtag image" data-aos="zoom-y-out" />
                </div>
            </div>
            <div className="bg-gradient-to-r from-lightyellow to-lightbrown" data-aos="zoom-y-out">
                <div className="pt-[3rem] md:pt-[7rem] mx-auto max-w-6xl pb-[3rem] md:pb-[6rem] px-5 flex flex-col items-center align-center text-center">
                    <p className="my-[0.5rem] md:my-[2rem] text-xl md:text-3xl text-center">
                        Seamless Webpage Interaction: <br className="sm:hidden" /> Note, Share, Discuss
                    </p>
                </div>
            </div>
        </section>
    )
}