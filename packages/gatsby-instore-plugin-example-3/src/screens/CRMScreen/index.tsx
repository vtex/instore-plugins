import { lazyWithPreload } from '@vtexlab/gatsby-theme-instore-core/src/core/utils/lazyImport'

export const CRMScreen = lazyWithPreload(
  () => import(/* webpackChunkName: "AnotherCRMScreen" */ './CRM'),
  'CRMScreen'
)
