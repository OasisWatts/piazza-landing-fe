export const metadata = {
  title: 'Piazza - Welcome to Piazza!',
  description: 'Write & Share Anything within Web Pages on Piazza',
}

import Intro from '@/components/intro'
import Hook1 from '@/components/hook1'
import Hook2 from '@/components/hook2'
import Hook3 from '@/components/hook3'
import Close from '@/components/close'
import Description from '@/components/description'
import IntroBfLanch from '@/components/intro-bflaunch'
import CloseBfLaunch from '@/components/close-bflaunch'
import Features from '@/components/features'

export default function Home() {
  return (
    <>
      {/* <Intro /> */}
      <IntroBfLanch />
      <Description />
      <div className="bg-gray-100 py-[7rem]">
        <Hook1 />
        <Hook2 />
        <Hook3 />
      </div>
      <Features />
      {/* <Close /> */}
      <CloseBfLaunch />
    </>
  )
}
