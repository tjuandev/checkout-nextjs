import * as React from 'react'

import { cn } from '@/helpers/cn'
import { Slot } from '@radix-ui/react-slot'
import { buttonVariants } from './styles'
import type { ButtonProps } from './types'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
