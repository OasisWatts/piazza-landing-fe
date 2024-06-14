export const metadata = {
  title: 'Home',
  description: 'Write & Share Anything within Web Pages on Piazza',
}

import Intro from '@/components/intro'
import Hook1 from '@/components/hook1'
import Hook2 from '@/components/hook2'
import Hook3 from '@/components/hook3'
import Close from '@/components/close'
import IntroBfLanch from '@/components/intro-bflaunch'
import CloseBfLaunch from '@/components/close-bflaunch'

export default function Home() {
  return (
    <>
      {/* <Intro /> */}
      <IntroBfLanch />
      <Hook1 />
      <Hook2 />
      <Hook3 />
      {/* <Close /> */}
      <CloseBfLaunch />
    </>
  )
}
