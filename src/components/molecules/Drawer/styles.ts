import clsx from 'clsx'

const drawer = {
  overlay: clsx(
    'data-[state=open]:animate-in',
    'data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0',
    'data-[state=open]:fade-in-0',
    'fixed',
    'inset-0',
    'z-50',
    'bg-black/50'
  ),
  content: clsx(
    'group/drawer-content',
    'bg-background',
    'fixed',
    'z-50',
    'flex',
    'h-auto',
    'flex-col',
    'data-[vaul-drawer-direction=top]:inset-x-0',
    'data-[vaul-drawer-direction=top]:top-0',
    'data-[vaul-drawer-direction=top]:mb-24',
    'data-[vaul-drawer-direction=top]:max-h-[80vh]',
    'data-[vaul-drawer-direction=top]:rounded-b-lg',
    'data-[vaul-drawer-direction=top]:border-b',
    'data-[vaul-drawer-direction=bottom]:inset-x-0',
    'data-[vaul-drawer-direction=bottom]:bottom-0',
    'data-[vaul-drawer-direction=bottom]:mt-24',
    'data-[vaul-drawer-direction=bottom]:max-h-[80vh]',
    'data-[vaul-drawer-direction=bottom]:rounded-t-lg',
    'data-[vaul-drawer-direction=bottom]:border-t',
    'data-[vaul-drawer-direction=right]:inset-y-0',
    'data-[vaul-drawer-direction=right]:right-0',
    'data-[vaul-drawer-direction=right]:w-3/4',
    'data-[vaul-drawer-direction=right]:border-l',
    'data-[vaul-drawer-direction=right]:sm:max-w-sm',
    'data-[vaul-drawer-direction=left]:inset-y-0',
    'data-[vaul-drawer-direction=left]:left-0',
    'data-[vaul-drawer-direction=left]:w-3/4',
    'data-[vaul-drawer-direction=left]:border-r',
    'data-[vaul-drawer-direction=left]:sm:max-w-sm'
  ),
  handle: clsx(
    'bg-muted',
    'mx-auto',
    'mt-4',
    'hidden',
    'h-2',
    'w-[100px]',
    'shrink-0',
    'rounded-full',
    'group-data-[vaul-drawer-direction=bottom]/drawer-content:block'
  ),
  header: clsx(
    'flex',
    'flex-col',
    'gap-0.5',
    'p-4',
    'group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center',
    'group-data-[vaul-drawer-direction=top]/drawer-content:text-center',
    'md:gap-1.5',
    'md:text-left'
  ),
  footer: clsx('mt-auto', 'flex', 'flex-col', 'gap-2', 'p-4'),
  title: clsx('text-foreground', 'font-semibold'),
  description: clsx('text-muted-foreground', 'text-sm')
}

export const S = drawer
