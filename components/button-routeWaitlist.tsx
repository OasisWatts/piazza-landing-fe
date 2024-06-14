export default function ButtonRouteWaitlist() {
    const gradientStyle = {
        backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(45deg, #E38F69, #D8B7F7)",
        border: "1px solid transparent",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
    }
    return (
        <div>
            <a style={gradientStyle} className="btn rounded-lg text-gray-600 mb-4 md:mb-0" href="/waitlist">Join the Waitlist</a>
        </div>
    )
}