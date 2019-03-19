import React from 'react'
import NextSeo from 'next-seo';
import Layout from '../components/Layout'
import client from '../client'
import RenderPlugs from '../components/RenderPlugs'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

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
        return {...res[0].page, slug}
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
        return {...res.frontpage, slug}
      })
    }

    return null

  }

  render() {
    const {
      title = 'Undefined',
      description,
      disallowRobots,
      openGraphImage,
      content = [],
      config = {},
      slug
    } = this.props

    const openGraphImages =
      openGraphImage ? [
        {
          url: builder.image(openGraphImage).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: title,
        },
        {
          // Facebook recommended size
          url: builder.image(openGraphImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: title,
        },
        {
          // Square 1:1
          url: builder.image(openGraphImage).width(600).height(600).url(),
          width: 600,
          height: 600,
          alt: title,
        }
      ] : []

    return (
      <Layout config={config}>
        <NextSeo
          config={{
            title: title,
            description,
            canonical: config.url && `${config.url}/${slug}`,
            openGraph: {
              images: openGraphImages,
            },
            noindex: disallowRobots
          }}
        />
        {/* {title && <h1>{title}</h1>} */}
        {content && <RenderPlugs plugs={content} />}
      </Layout>
    )
  }
}

export default LandingPage
