import PropTypes from 'prop-types'
import React from 'react'
import NextSeo from 'next-seo'
import Link from 'next/link'
import Layout from '../components/Layout'
import client from '../client'

class IndexPage extends React.Component {
  static propTypes = {
    config: PropTypes.object,
    pages: PropTypes.array
  }

  render () {
    const {config, pages} = this.props
    return (
      <Layout config={config}>
        <h1>No route set</h1>
        <h2>Setup automatic routes in sanity or custom routes in next.config.js</h2>
      </Layout>
    )
  }
}

export default IndexPage
