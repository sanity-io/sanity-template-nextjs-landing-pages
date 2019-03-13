import React from 'react'
import Header from './Header'
import Head from 'next/head'

export default function Layout(props) {
  const {config} = props
  if (!config) {
    return <div>Missing config</div>
  }
  const {title, mainNavigation} = config
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container'>
        <Header title={title} navItems={mainNavigation} />
        {props.children}
      </div>
    </div>
  )
}
