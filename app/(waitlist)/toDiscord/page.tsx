import { PIAZZA_DOMAIN } from "@/components/env"
import ToDiscord from "@/components/to-discord"
import OGImg from '@/public/images/opengraph-image.png'

export const metadata = {
    title: 'Piazza - Join Discord Server',
    description: 'Get the latest development news and share your proposals!',
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
            <ToDiscord />
        </>
    )
}