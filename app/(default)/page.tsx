export const metadata = {
  title: 'Piazza - Welcome to Piazza!',
  description: 'Write & Share Anything within Web Pages on Piazza',
}

import Intro from '@/components/intro'
import Hook1 from '@/components/hook1-1'
import Hook2 from '@/components/hook2-1'
import Hook3 from '@/components/hook3-1'
import Close from '@/components/close'
import Description from '@/components/description'
import IntroBfLanch from '@/components/intro-bflaunch'
import CloseBfLaunch from '@/components/close-bflaunch'
import Users from '@/components/users'
import SumUp from '@/components/sumup'

const radialGradient = {
  width: "100vw",
  paddingBottom: "5rem",
  background:
    "radial-gradient(farthest-side at bottom right,rgba(227, 143, 105, 0.5), transparent 50%),radial-gradient(farthest-side at  left,rgba(216, 183, 247, 0.5), transparent 50%),radial-gradient( farthest-corner at top right,rgba(227, 143, 105, 0.5), transparent 30%)"
}
export default function Home() {
  return (
    <>
      <div style={radialGradient}>
        {/* <Intro /> */}
        <IntroBfLanch />
        {/* <Description /> */}
        <Hook1 />
        <Hook2 />
        <Hook3 />
      </div>
      <SumUp />
      <Users />
      {/* <Close /> */}
      <CloseBfLaunch />
    </>
  )
}
