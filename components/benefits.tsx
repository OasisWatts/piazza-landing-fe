import Image from "next/image";
import InBed from "@/public/images/inbed.jpeg"
import TwoPeople from "@/public/images/twopeople.jpg"

export default function Benefits() {
    return (
        <section className="relative">
            <div className="md:mx-auto max-w-6xl px-5 md:text-center my-auto">
                <h1 className="  text-xl md:text-4xl leading-tighter tracking-tighter mb-[5rem] md:mb-[10rem] md:mt-[10rem] font-semibold" data-aos="zoom-y-out">
                    Organize data from web searches on a mobile browser
                    <p className="inline text-brown">
                        <br />so you can utilize it efficiently
                    </p>
                </h1>
                <div className="mb-[5rem] md:mb-[10rem]" data-aos="zoom-y-out">
                    <Image className="w-[48%] mr-[4%] inline" src={InBed} alt="Image: A man watching phone" />
                    <Image className="w-[48%] inline" src={TwoPeople} alt="Image: A women watching phone" />
                </div>
                <h1 className="mb-[5rem] md:mb-[10rem]   text-xl md:text-4xl leading-tighter tracking-tighter mb-[2rem] md:mb-[5rem] font-semibold" data-aos="zoom-y-out">
                    Enjoy sharing your thoughts from webpages <br /> on your mobile browser
                </h1>
            </div>
        </section>
    )
}