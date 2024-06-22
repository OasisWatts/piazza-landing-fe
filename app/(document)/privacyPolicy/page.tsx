import PrivacyPolicy from "@/components/privacy-policy"

export const metadata = {
    title: 'Privacy Policy',
    description: '',
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
            <PrivacyPolicy />
        </>
    )
}