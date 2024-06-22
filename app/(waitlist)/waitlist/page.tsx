import { PIAZZA_DOMAIN } from "@/components/env"
import JoinWaitlist from "@/components/join-waitlist"
import OGImg from '@/public/images/opengraph-image.png'

export const metadata = {
    title: 'Piazza - Join Waitlist',
    description: 'Be the first user of the Piazza Browser',
    metadataBase: new URL(PIAZZA_DOMAIN),
    openGraph: {
        images: [
            {
                url: OGImg.src,
                width: OGImg.width,
                height: OGImg.height
            },
        ],
    },
    twitter: {
        images: [
            {
                url: OGImg.src,
                width: OGImg.width,
                height: OGImg.height
            },
        ]
    },
}


export default function Home() {
    return (
        <>
            <JoinWaitlist />
        </>
    )
}