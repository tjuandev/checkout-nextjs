import type * as React from 'react'
import type { Drawer as DrawerPrimitive } from 'vaul'

export type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root>

export type DrawerTriggerProps = React.ComponentProps<
  typeof DrawerPrimitive.Trigger
>

export type DrawerPortalProps = React.ComponentProps<
  typeof DrawerPrimitive.Portal
>

export type DrawerCloseProps = React.ComponentProps<
  typeof DrawerPrimitive.Close
>

export type DrawerOverlayProps = React.ComponentProps<
  typeof DrawerPrimitive.Overlay
>

export type DrawerContentProps = React.ComponentProps<
  typeof DrawerPrimitive.Content
>

export type DrawerHeaderProps = React.ComponentProps<'div'>

export type DrawerFooterProps = React.ComponentProps<'div'>

export type DrawerTitleProps = React.ComponentProps<
  typeof DrawerPrimitive.Title
>

export type DrawerDescriptionProps = React.ComponentProps<
  typeof DrawerPrimitive.Description
>
