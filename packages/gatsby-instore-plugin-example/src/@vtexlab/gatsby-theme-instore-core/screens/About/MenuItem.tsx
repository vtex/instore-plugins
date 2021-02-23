import React from 'react'
import type { FC } from 'react'
import { useSystem } from '@vtex/admin-ui'

export const MenuItem: FC = () => {
  const { cn } = useSystem()

  return <span className={cn({ color: 'pink' })}>Custom About</span>
}
