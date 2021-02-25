import React from 'react'
import { useSystem } from '@vtex/admin-ui'
import { AboutMenuItem as BaseMenuItem } from '@vtexlab/gatsby-theme-instore-core/src/screens/Instore/components/Menu/AboutMenuItem'
import type { MenuItemType } from '@vtexlab/gatsby-theme-instore-core/src/screens/Instore/components/Menu/MenuItem'

export const AboutMenuItem: MenuItemType = ({
  children = 'Custom About',
  ...props
}) => {
  const { cn } = useSystem()

  return (
    BaseMenuItem && (
      <BaseMenuItem {...props}>
        <span className={cn({ color: 'pink' })}>{children}</span>
      </BaseMenuItem>
    )
  )
}
