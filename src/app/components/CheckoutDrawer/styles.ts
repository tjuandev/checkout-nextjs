import clsx from 'clsx'

export const S = {
  drawer: clsx(
    'bg-gray-900',
    'border-l',
    'border-gray-700',
    '!w-[500px]',
    '!max-w-[90vw]'
  ),
  header: {
    container: clsx(
      'border-b',
      'border-gray-700',
      'border-t-4',
      'border-t-yellow-500',
      'bg-gray-800/80'
    ),
    content: clsx('flex', 'items-center', 'justify-between'),
    title: clsx('flex', 'items-center', 'gap-2', 'text-white'),
    titleIcon: clsx('size-5', 'text-yellow-500'),
    closeButton: clsx(
      'size-8',
      'text-gray-400',
      'hover:text-white',
      'hover:bg-gray-700'
    ),
    closeIcon: clsx('size-4')
  },
  content: {
    container: clsx('flex-1', 'overflow-y-auto', 'p-4', 'bg-gray-900'),
    emptyState: {
      container: clsx(
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'h-full',
        'text-center',
        'text-gray-400'
      ),
      icon: clsx('size-16', 'mb-4', 'opacity-50', 'text-gray-500'),
      title: clsx('text-lg', 'font-semibold', 'mb-2', 'text-white'),
      description: clsx('text-sm', 'text-gray-400')
    },
    itemsList: clsx('space-y-4'),
    item: {
      container: clsx(
        'flex',
        'items-center',
        'gap-4',
        'p-4',
        'border',
        'border-gray-700',
        'rounded-lg',
        'bg-gray-800/50'
      ),
      image: clsx('size-16', 'object-cover', 'rounded-md'),
      content: clsx('flex-1', 'min-w-0'),
      title: clsx('font-medium', 'text-sm', 'truncate', 'text-white'),
      price: clsx('text-sm', 'text-gray-400'),
      controls: clsx('flex', 'items-center', 'gap-2'),
      quantityButton: clsx(
        'size-8',
        'text-yellow-500',
        'hover:bg-yellow-500/10',
        'hover:text-yellow-400',
        'disabled:text-gray-500',
        'disabled:hover:bg-transparent'
      ),
      quantityText: clsx(
        'w-8',
        'text-center',
        'text-sm',
        'font-medium',
        'text-white'
      ),
      removeButton: clsx(
        'size-8',
        'text-red-400',
        'hover:text-red-300',
        'hover:bg-red-500/10'
      ),
      minusIcon: clsx('size-3'),
      plusIcon: clsx('size-3'),
      trashIcon: clsx('size-4')
    }
  },
  footer: {
    container: clsx('border-t', 'border-gray-700', 'bg-gray-800/80'),
    content: clsx('space-y-4'),
    total: {
      container: clsx(
        'flex',
        'items-center',
        'justify-between',
        'text-lg',
        'font-semibold',
        'text-white'
      ),
      label: clsx('text-white'),
      value: clsx('text-yellow-500')
    },
    buttons: clsx('flex', 'gap-2'),
    clearButton: clsx(
      'flex-1',
      'text-gray-300',
      'hover:bg-gray-700',
      'hover:text-white'
    ),
    checkoutButton: clsx(
      'flex-1',
      'bg-yellow-500',
      'text-gray-900',
      'hover:bg-yellow-400'
    )
  }
}
