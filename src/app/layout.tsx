import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import '../theme/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Game Store',
  description: 'Project made using Next.JS'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-center w-full border-b bg-gray-900/90 border-t-4 border-t-yellow-500">
          <div className="flex items-center gap-2 w-full max-w-8xl p-4">
            <Image
              src="/logo.png"
              alt="Video Game Store"
              width={32}
              height={32}
            />
            <h1 className="text-white text-xl font-bold">Game Store</h1>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
