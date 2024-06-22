import ToDiscord from "@/components/to-discord"

export const metadata = {
    title: 'Piazza - Join Discord Server',
    description: 'Join Discord Server and get service!',
    openGraph: {
        images: ['/public/images/OG.png']
    },
    twitter: {
        images: ['/public/images/OG.png']
    }
}


export default function Home() {
    return (
        <>
            <ToDiscord />
        </>
    )
}