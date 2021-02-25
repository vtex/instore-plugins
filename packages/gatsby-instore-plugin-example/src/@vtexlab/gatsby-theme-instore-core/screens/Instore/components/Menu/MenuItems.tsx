import React, { Fragment } from 'react'
import type { FC } from 'react'
import { MenuItems as BaseMenuItems } from '@vtexlab/gatsby-theme-instore-core/src/screens/Instore/components/Menu/MenuItems'
import type { MenuItemType } from '@vtexlab/gatsby-theme-instore-core/src/screens/Instore/components/Menu/MenuItem'
import { MenuItemWrapper } from '@vtexlab/gatsby-theme-instore-core/src/screens/Instore/components/Menu/MenuItem'

import { AboutMenuItem } from './AboutMenuItem'

export const AnotherAboutMenuItem: MenuItemType = ({
  children = 'Another about link',
  ...props
}) => AboutMenuItem && <AboutMenuItem {...props}>{children}</AboutMenuItem>

export const MenuItems: FC = ({ ...props }) => {
  return (
    <Fragment>
      <BaseMenuItems {...props} />
      <MenuItemWrapper>
        <AnotherAboutMenuItem />
      </MenuItemWrapper>
    </Fragment>
  )
}
