import clsx from 'clsx'

export const S = {
  card: clsx(
    'bg-card',
    'text-card-foreground',
    'flex',
    'flex-col',
    'gap-6',
    'rounded-xl',
    'border',
    'py-6',
    'shadow-sm'
  ),
  header: clsx(
    '@container/card-header',
    'grid',
    'auto-rows-min',
    'grid-rows-[auto_auto]',
    'items-start',
    'gap-1.5',
    'px-6',
    'has-data-[slot=card-action]:grid-cols-[1fr_auto]',
    '[.border-b]:pb-6'
  ),
  title: clsx('leading-none', 'font-semibold'),
  description: clsx('text-muted-foreground', 'text-sm'),
  action: clsx(
    'col-start-2',
    'row-span-2',
    'row-start-1',
    'self-start',
    'justify-self-end'
  ),
  content: clsx('px-6'),
  footer: clsx('flex', 'items-center', 'px-6', '[.border-t]:pt-6')
}
