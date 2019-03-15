import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'


export default function Layout(props) {
  const {config} = props
  if (!config) {
    return <div>Missing config</div>
  }
  const {title, mainNavigation, footerNavigation, footerText} = config
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
      </Head>
      <div className='container'>
        <Header title={title} navItems={mainNavigation} />
        {props.children}
        <Footer navItems={footerNavigation} text={footerText} />
      </div>
    </div>
  )
}
