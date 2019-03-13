import React from 'react'
import NextSeo from 'next-seo';
import Layout from '../components/Layout'
import client from '../client'
import RenderPlugs from '../components/RenderPlugs'

class LandingPage extends React.Component {
  static async getInitialProps({query, params}) {
    const slug = query.slug
    if (slug) {
      return client.fetch(`
        *[_type == "route" && slug.current == "${slug}"] {
          page->
        }
      `).then(res => {
        return res[0].page
      })
    }
  }

  render() {
    const {title, content, config} = this.props
    return (
      <Layout config={config}>
        <NextSeo
          config={{
            title: title,
            description: 'A short description goes here.',
          }}
        />
        {title && <h1>{title}</h1>}
        {content && <RenderPlugs plugs={content} />}
      </Layout>
    )
  }
}

export default LandingPage
