import type { Metadata } from 'next'
import 'theme/globals.css'
import { CheckoutButton } from '@/app/components/CheckoutButton/CheckoutButton'
import { CheckoutDrawer } from '@/app/components/CheckoutDrawer/CheckoutDrawer'
import { CartProvider } from '@/contexts/Checkout/context'
import { layoutS } from './styles'

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
      <body className={layoutS.body}>
        <CartProvider>
          <header className={layoutS.header}>
            <div className={layoutS.headerContent}>
              <div className={layoutS.logo}>
                <h1 className={layoutS.headerTitle}>Game Store</h1>
              </div>
              <CheckoutButton className={layoutS.cart} />
            </div>
          </header>
          <main className={layoutS.main}>
            <div className={layoutS.content}>{children}</div>
          </main>
          <CheckoutDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
