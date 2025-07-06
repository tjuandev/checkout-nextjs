'use client'

import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/helpers/cn'
import { S } from './styles'

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(S.root, className)}
      {...props}
    >
      <SwitchPrimitive.Thumb data-slot="switch-thumb" className={cn(S.thumb)} />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
