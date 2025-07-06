import clsx from 'clsx'

const checkoutButton = {
  button: clsx('relative'),
  icon: clsx('size-6'),
  badge: clsx(
    'absolute',
    '-top-1',
    '-right-1',
    'size-5',
    'rounded-full',
    'bg-yellow-500',
    'text-xs',
    'font-bold',
    'text-black',
    'flex',
    'items-center',
    'justify-center'
  )
}

export const S = checkoutButton
