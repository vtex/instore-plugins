import React from 'react'
import type { FC } from 'react'
import { Heading, Paragraph, Card, Set } from '@vtex/admin-ui'

export const CRMScreen: FC = () => {
  return (
    <Card csx={{ width: '32rem' }}>
      <Set orientation="vertical" spacing={3} fluid>
        <Heading>CRM</Heading>
        <Paragraph>
          It’s all about being ready to grow and reach new levels. Have a solid
          foundation, modular thinking and flexible essence, and you’re building
          for scale. We are global but we’re audacious enough to aim for the
          stars.
        </Paragraph>
      </Set>
    </Card>
  )
}
