import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'
import { LogoJsonLd } from 'next-seo';

export default function Layout(props) {
  const {config} = props
  if (!config) {
    console.error('Missing config')
    return <div>Missing config</div>
  }
  const {title, mainNavigation, footerNavigation, footerText, logo} = config
  const logoUrl = logo && logo.asset && logo.asset.url
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
      </Head>
      <div className='container'>
        <Header title={title} navItems={mainNavigation} logo={logo} />
        {props.children}
        <Footer navItems={footerNavigation} text={footerText} />
        {logoUrl && <LogoJsonLd url={logoUrl} />}
      </div>
    </div>
  )
}
