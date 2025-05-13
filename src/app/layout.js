import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Abdul Haseeb Rashid | AI-Driven Web Application Developer",
  description: "Portfolio of Abdul Haseeb Rashid, an AI-Driven Web Application Developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 ${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
