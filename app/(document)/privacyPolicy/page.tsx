import { PIAZZA_DOMAIN } from "@/components/env"
import PrivacyPolicy from "@/components/privacy-policy"
import OGImg from '@/public/images/opengraph-image.png'

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
            <PrivacyPolicy />
        </>
    )
}