import Email from "./components/Email"
import "./globals.css"
import Navbar from "./sections/Navbar"

export const metadata = {
  title: "Michael Adenugba",
  description: "My portfolio website built with next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {/* <Email /> */}
        <div className='blog-container'>{children}</div>
      </body>
    </html>
  )
}
