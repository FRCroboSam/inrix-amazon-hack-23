import {Roboto } from 'next/font/google'
import './globals.css'

 
const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        {children}
      </body>
    </html>
  )
}