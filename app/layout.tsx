import './css/style.css'

import { Open_Sans } from 'next/font/google'

const roboto = Open_Sans({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap'
})

export const metadata = {
  title: 'Layout',
  description: 'Layout',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  )
}
