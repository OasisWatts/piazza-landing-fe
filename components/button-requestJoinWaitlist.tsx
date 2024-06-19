export default function ButtonRequestJoinWaitlist({ requestJoinWaitlist }: { requestJoinWaitlist: any }) {
    const gradientStyle = {
        backgroundImage: "linear-gradient(45deg, #E38F69, #D8B7F7)",
        backgroundSize: "cover"
    }
    return (
        <div style={gradientStyle} className="btn md:w-lbtn rounded-lg text-white mb-4 md:mb-0 font-urbanist font-semibold cursor-pointer" onClick={requestJoinWaitlist}>
            Join the Wait List
        </div>
    )
}