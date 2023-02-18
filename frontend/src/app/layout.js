import Team from '@/components/Team'
import Footer from '@/components/Footer'
import { Hero } from '@/components/Hero'
import Login from '@/components/Login'
import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        {/* <Hero /> */}
        {/* <Login /> */}
        {/* <Team /> */}

        {children}
        <Footer />
      </body>
    </html>
  )
}
