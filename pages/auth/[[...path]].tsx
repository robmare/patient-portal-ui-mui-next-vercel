import dynamic from 'next/dynamic'
import Head from 'next/head'
import React, { useEffect } from 'react'
import SuperTokens, { redirectToAuth } from 'supertokens-auth-react'

const SuperTokensComponentNoSSR = dynamic<
  React.ComponentProps<typeof SuperTokens.getRoutingComponent>
>(new Promise((res) => res(SuperTokens.getRoutingComponent)), { ssr: false })

export default function Auth(): JSX.Element {
  useEffect(() => {
    if (SuperTokens.canHandleRoute() === false) {
      redirectToAuth({
        redirectBack: false,
      })
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Patient Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SuperTokensComponentNoSSR />
      </main>
    </div>
  )
}
