import React, { Fragment } from 'react'
import type { FC } from 'react'
import { Route } from 'react-router-dom'
import { Routes as BaseRoutes } from '@vtexlab/gatsby-theme-instore-core/src/screens/Instore/components/Router/Routes.pub'
import { LazyComponent } from '@vtexlab/gatsby-theme-instore-core/src/core/components/LazyComponent'

import { CRMScreen } from '../../../../../../screens/CRMScreen'

export const Routes: FC = ({ ...props }) => (
  <Fragment>
    <BaseRoutes {...props} />
    <Route path="/crm">
      <LazyComponent component={CRMScreen} />
    </Route>
  </Fragment>
)
