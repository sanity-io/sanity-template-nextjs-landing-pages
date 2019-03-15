import React from 'react'
import App, { Container } from 'next/app'
import client from '../client'
import 'normalize.css'
import "../styles/shared.module.css"
import "../styles/layout.css"

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    mainNavigation[]->,
    footerNavigation[]->
  }[0]
`

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then(config => {
      pageProps.config = config
      return { pageProps }
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
