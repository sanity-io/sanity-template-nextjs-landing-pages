import React from 'react'
import NextSeo from 'next-seo';
import Layout from '../components/Layout'
import client from '../client'
import RenderPlugs from '../components/RenderPlugs'

const pageSubQuery = `
  ...,
  content[] {
    ...,
    cta {
      ...,
      route->
    },
    ctas[] {
      ...,
      route->
    }
  }
`

class LandingPage extends React.Component {
  static async getInitialProps({query}) {
    const {slug} = query
    if (!query) {
      console.error('no query')
      return
    }
    if (slug && slug !== '/') {
      return client.fetch(`
        *[_type == "route" && slug.current == "${slug}"] {
          page-> {
            ${pageSubQuery}
          }
        }
      `).then(res => {
        return res[0].page
      })
    }

    // Frontpage
    if (slug && slug === '/') {
      return client.fetch(`
        *[_id == "global-config"] {
          frontpage -> {
            ${pageSubQuery}
          }
        }[0]
      `).then(res => {
        return res.frontpage
      })
    }

    return null

  }

  render() {
    const {title = 'Undefined', content = [], config = {}} = this.props
    return (
      <Layout config={config}>
        <NextSeo
          config={{
            title: title,
            description: 'A short description goes here.',
          }}
        />
        {/* {title && <h1>{title}</h1>} */}
        {content && <RenderPlugs plugs={content} />}
      </Layout>
    )
  }
}

export default LandingPage
