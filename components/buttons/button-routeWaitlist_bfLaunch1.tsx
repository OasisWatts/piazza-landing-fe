export default function ButtonRouteWaitlistBfLaunch1() {
    const gradientStyle = {
        backgroundImage: "linear-gradient(45deg, #FFD5E6, #E7CDFF)",
        backgroundSize: "cover"
    }
    return (
        <div className="text-center md:btn md:w-lbtn md:h-lbtn btn-sm rounded-full bg-gradient-to-r from-lightpink to-lightviolet">
            <a className="" href="/waitlist">
                {/* <div> */}
                <div className="md:text-lg text-base relative top-1">Join the Wait List</div>
                <div className="md:text-base text-sm text-gray-600 relative bottom-1">
                    to be among the first users
                </div>
                {/* </div> */}
            </a>
        </div>
    )
}