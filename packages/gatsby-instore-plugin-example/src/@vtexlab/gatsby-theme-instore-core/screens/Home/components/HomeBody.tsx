import React from 'react'
import type { FC } from 'react'
import { useSystem } from '@vtex/admin-ui'

export const HomeBody: FC = () => {
  const { cn } = useSystem()

  return (
    <div className={cn({ color: 'dark.secondary' })}>
      This is defined by the inStore plugin example! :D
    </div>
  )
}
