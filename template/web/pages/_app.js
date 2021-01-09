import React from 'react'
import App from 'next/app'
import client from '../client'
// import 'normalize.css'
import '../styles/shared.module.css'
import '../styles/layout.css'

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  // Add site config from sanity
  const config = await client.fetch(siteConfigQuery)
  if (config) appProps.pageProps.config = config
  return { ...appProps }
}

export default MyApp