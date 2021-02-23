import React, { Fragment, useState } from 'react'
import type { FC } from 'react'
import { Heading, Paragraph, Button, Alert, useSystem } from '@vtex/admin-ui'

export const AboutScreen: FC<{ path: string }> = () => {
  const [showSecret, setShowSecret] = useState(false)
  const { cn } = useSystem()

  return (
    <Fragment>
      <Heading
        styleOverrides={{ marginTop: 0, marginBottom: 64, maxWidth: 320 }}
      >
        Custom About
      </Heading>
      <Paragraph>
        <span className={cn({ color: 'pink' })}>
          This is a custom about page
        </span>
      </Paragraph>
      <div className={cn({ marginTop: 10 })}>
        {showSecret ? (
          <Alert visible type="success">
            <span className={cn({ marginLeft: 10 })}>inStore rocks!</span>
            <span role="img" aria-label="rock on">
              🤘
            </span>
          </Alert>
        ) : (
          <Button onClick={() => setShowSecret(true)}>
            Click to know a secret
          </Button>
        )}
      </div>
    </Fragment>
  )
}
