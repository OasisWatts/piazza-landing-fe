import LogoDiscord from "./logo-discord";
import LogoLinkedin from "./logo-linkedin";
import LogoTwitter from "./logo-twitter";

export default function Footer() {
  return (
    <footer>
      <div className="bg-lightPink p-7 pt-10 flex flex-col items-center">
        <div className="mb-7 flex justify-around">
          <div className="mr-10">
            <LogoDiscord size={20} fill="#666666" /></div>
          <div className="mr-10">
            <LogoLinkedin size={20} fill="#666666" /></div>
          <LogoTwitter size={20} fill="#666666" />
        </div>
        <div className="text-gray-600 text-sm text-center mb-7">
          piazzabrowser@gmail.com
        </div>
        <div className="flex items-center mb-7 justify-center">
          <div className="text-gray-600 text-sm text-center mr-[1rem] md:mr-[2rem]">
            <a href="/privacyPolicy">
              Privacy Policy
            </a>
          </div>
          <div className="text-gray-600 text-sm text-center">
            <a href="/termsOfService">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
