import JoinWaitlist from "@/components/join-waitlist"

export const metadata = {
    title: 'Piazza - Join Waitlist',
    description: 'Join Waitlist to get Piazza in the future!',
}



export default function Home() {
    return (
        <>
            <JoinWaitlist />
        </>
    )
}