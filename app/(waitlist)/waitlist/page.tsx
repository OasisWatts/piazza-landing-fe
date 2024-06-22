import JoinWaitlist from "@/components/join-waitlist"

export const metadata = {
    title: 'Piazza - Join Waitlist',
    description: 'Be the first user of the Piazza Browser'
}


export default function Home() {
    return (
        <>
            <JoinWaitlist />
        </>
    )
}