import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
// import localFont from 'next/font/local'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const roboto = Roboto({ weight: '300', subsets: ['latin'] })

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

export const metadata: Metadata = {
  title: 'Expense tracker',
  description: 'Track your expenses easily',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
        <body className={`${roboto.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
