export default function ButtonRouteWaitlistBfLaunch() {
    const gradientStyle = {
        backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(45deg, #E38F69, #D8B7F7)",
        border: "2px solid transparent",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box"
    }
    return (
        <div>
            <a style={gradientStyle} className="btn md:w-lbtn md:h-lbtn rounded-lg md:rounded-2xl" href="/waitlist">
                <div>
                    <div className="md:text-xl text-md text-gray-700 relative top-1">Join the Wait List</div>
                    <div className="md:text-base text-sm text-gray-500 relative bottom-1">
                        to be among the first users
                    </div>
                </div>
            </a>
        </div>
    )
}