import clsx from 'clsx'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const layoutS = {
  body: clsx(inter.className, 'bg-gray-900'),
  header: clsx(
    'flex',
    'justify-center',
    'w-full',
    'bg-gray-800/80',
    'border-t-4',
    'border-t-yellow-500'
  ),
  headerContent: clsx(
    'flex',
    'items-center',
    'justify-between',
    'gap-2',
    'w-full',
    'max-w-8xl',
    'p-4'
  ),
  logo: clsx('flex', 'items-center', 'gap-2'),
  headerTitle: clsx('text-white', 'text-xl', 'font-bold'),
  cart: clsx(
    'flex',
    'items-center',
    'text-yellow-500',
    'hover:bg-yellow-500/10',
    'p-4'
  ),
  cartIcon: clsx('size-6'),
  main: clsx('flex', 'justify-center', 'w-full'),
  content: clsx('w-full', 'max-w-8xl', 'p-4')
}

export const pageS = {
  container: clsx('space-y-8'),
  grid: clsx(
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'lg:grid-cols-4',
    'gap-6'
  ),
  emptyState: clsx('text-center', 'py-12'),
  emptyStateText: clsx('text-gray-400', 'text-lg')
}
