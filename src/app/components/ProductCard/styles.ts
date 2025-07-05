import clsx from 'clsx'

const card = {
  card: clsx('bg-gray-900', 'border-gray-800', 'overflow-hidden'),
  image: {
    container: clsx(
      'relative',
      'aspect-[4/3]',
      'bg-gray-800',
      'overflow-hidden',
      'rounded-t-xl'
    ),
    image: clsx('object-cover'),
    noImageContainer: clsx(
      'w-full',
      'h-full',
      'bg-gradient-to-br',
      'from-gray-700',
      'to-gray-800',
      'flex',
      'items-center',
      'justify-center'
    ),
    noImageText: clsx('text-gray-500', 'text-sm')
  },
  header: {
    container: clsx('pb-4'),
    title: clsx('text-lg', 'text-white', 'line-clamp-2')
  },
  content: {
    container: clsx('pt-0'),
    gameInfo: clsx('flex', 'items-center', 'gap-4', 'mb-4', 'text-sm'),
    ratingContainer: clsx('flex', 'items-center', 'gap-1'),
    ratingStar: clsx('text-yellow-400'),
    ratingText: clsx('text-gray-300'),
    releaseYear: clsx('text-gray-400'),
    description: clsx(
      'text-gray-400',
      'text-sm',
      'mb-4',
      'line-clamp-2',
      'leading-relaxed'
    )
  },
  footer: {
    container: clsx('pt-0'),
    content: clsx('flex', 'items-center', 'justify-between', 'w-full'),
    priceContainer: clsx('flex', 'flex-col'),
    price: clsx('text-2xl', 'font-bold', 'text-white'),
    downloadText: clsx('text-xs', 'text-gray-500'),
    addToCartButton: clsx(
      'bg-yellow-500',
      'hover:bg-yellow-600',
      'text-gray-900',
      'font-semibold',
      'px-4',
      'py-2',
      'rounded-lg',
      'transition-all',
      'duration-200',
      'hover:shadow-lg',
      'hover:shadow-yellow-500/25'
    ),
    plusIcon: clsx('size-4', 'mr-2')
  }
}

export const S = card
