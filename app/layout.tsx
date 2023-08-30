import Email from "./components/Email"
import "./globals.css"
import Navbar from "./sections/Navbar"

export const metadata = {
  title: "Michael | Personal Portfolio",
  description: " is a full-stack developer with 3 years of experience.",
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
        <main className='max-w-4xl mx-auto px-4'>{children}</main>
      </body>
    </html>
  )
}

// fix update
