import { PIAZZA_DOMAIN } from "@/components/env"
import TermsOfService from "@/components/terms-of-service"
import OGImg from '@/public/images/opengraph-image.png'
import TwitterImg from '@/public/images/twitter-image.png'

export const metadata = {
    title: 'Terms of Service',
    description: '',
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
                url: TwitterImg.src,
                width: TwitterImg.width,
                height: TwitterImg.height
            },
        ]
    },
}



export default function Home() {
    return (
        <>
            <TermsOfService />
        </>
    )
}