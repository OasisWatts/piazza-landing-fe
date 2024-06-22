import ToDiscord from "@/components/to-discord"

export const metadata = {
    title: 'Piazza - Join Discord Server',
    description: 'Get the latest development news and share your proposals!'
}


export default function Home() {
    return (
        <>
            <ToDiscord />
        </>
    )
}