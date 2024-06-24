export default function ButtonRouteWaitlist() {
    const gradientStyle = {
        backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(45deg, #E38F69, #D8B7F7)",
        border: "2px solid transparent",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box"
    }
    return (
        <div>
            <a style={gradientStyle} className="btn md:w-lbtn md:h-lbtn rounded-lg md:rounded-2xl" href="/waitlist">
                <div className="md:text-xl text-md text-gray-700">Join the Wait List</div>
            </a>
        </div>
    )
}