import React, { Fragment } from 'react'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems as BaseMenuItems } from '@vtexlab/gatsby-theme-instore-core/src/screens/Instore/components/Menu/MenuItems'
import type { MenuItemType } from '@vtexlab/gatsby-theme-instore-core/src/screens/Instore/components/Menu/MenuItem'
import { MenuItemWrapper } from '@vtexlab/gatsby-theme-instore-core/src/screens/Instore/components/Menu/MenuItem'

export const CRMMenuItem: MenuItemType = ({ children = 'CRM', ...props }) => (
  <Link to="/crm" {...props}>
    {children}
  </Link>
)

export const MenuItems: FC = ({ ...props }) => {
  return (
    <Fragment>
      <BaseMenuItems {...props} />
      <MenuItemWrapper>
        <CRMMenuItem />
      </MenuItemWrapper>
    </Fragment>
  )
}
