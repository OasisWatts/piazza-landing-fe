import TermsOfService from "@/components/terms-of-service"

export const metadata = {
    title: 'Terms of Service',
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
            <TermsOfService />
        </>
    )
}