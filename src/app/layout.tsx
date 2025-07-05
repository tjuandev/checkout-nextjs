import type { Metadata } from 'next'
import 'theme/globals.css'
import { Button } from 'components/atoms/Button/Button'
import { ShoppingCart } from 'lucide-react'
import { S } from './styles'

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
      <body className={S.body}>
        <header className={S.header}>
          <div className={S.headerContent}>
            <div className={S.logo}>
              <h1 className={S.headerTitle}>Game Store</h1>
            </div>
            <Button
              variant="ghost"
              className={S.cart}
              size="icon"
              aria-label="checkout cart"
            >
              <ShoppingCart className={S.cartIcon} />
            </Button>
          </div>
        </header>
        <main className={S.main}>
          <div className={S.content}>{children}</div>
        </main>
      </body>
    </html>
  )
}
