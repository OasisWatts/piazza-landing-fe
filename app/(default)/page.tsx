import OGImg from '@/public/images/opengraph-image.png'
import TwitterCardImag from '@/public/images/twitter-card-image.png'

export const metadata = {
  title: 'Piazza - Welcome to Piazza!',
  description: 'Write & Share Anything within Webpages on Piazza',
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

import Intro from '@/components/intro'
import Close from '@/components/close'
import Description from '@/components/description'
import IntroBfLanch from '@/components/intro-bflaunch'
import CloseBfLaunch from '@/components/close-bflaunch'
import Users from '@/components/users'
import Wow from '@/components/wow'
import Benefits from '@/components/benefits'
import { PIAZZA_DOMAIN } from '@/components/env'
import IntroBfLanch1 from '@/components/intro-bflaunch1'
import Wow1 from '@/components/wow1'
import Users1 from '@/components/users1'
import CloseBfLaunch1 from '@/components/close-bflaunch1'

// const radialGradient = {
//   width: "100vw",
//   background:
//     "radial-gradient(farthest-side at bottom right,rgba(227, 143, 105, 0.5), transparent 50%),radial-gradient(farthest-side at  left,rgba(216, 183, 247, 0.5), transparent 50%),radial-gradient( farthest-corner at top right,rgba(227, 143, 105, 0.5), transparent 30%)"
// }
export default function Home() {
  return (
    <>
      {/* <Intro /> */}
      <IntroBfLanch1 />
      {/* <Description /> */}
      {/* <Benefits /> */}
      {/* <Wow /> */}
      {<Wow1 />}
      {/* <Users /> */}
      <Users1 />
      {/* <Close /> */}
      {/* <CloseBfLaunch /> */}
      <CloseBfLaunch1 />
    </>
  )
}
