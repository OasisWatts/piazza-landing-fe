import { ImageResponse } from 'next/og';
import OgImg from '@/public/images/OG.png'
import Image from 'next/image';

export const alt = 'About Acme';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';
export const runtime = 'edge';

export default function og() {
    return new ImageResponse(
        (
            <Image src={OgImg} alt="" />
            //   <div
            //     style={{
            //       fontSize: 128,
            //       background: 'white',
            //       width: '100%',
            //       height: '100%',
            //       display: 'flex',
            //       alignItems: 'center',
            //       justifyContent: 'center',
            //     }}
            //   >
            //     예아 잘 나온다
            //   </div>
        ),
        {
            ...size,
        },
    );
}