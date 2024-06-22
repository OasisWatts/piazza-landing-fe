import { PIAZZA_DOMAIN } from "@/components/env"
import PrivacyPolicy from "@/components/privacy-policy"
import OGImg from '@/public/images/opengraph-image.png'
import TwitterCardImag from '@/public/images/twitter-card-image.png'

export const metadata = {
    title: 'Privacy Policy',
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
                url: TwitterCardImag.src,
                width: TwitterCardImag.width,
                height: TwitterCardImag.height
            },
        ]
    },
}



export default function Home() {
    return (
        <>
            <PrivacyPolicy />
        </>
    )
}