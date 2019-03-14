import React from 'react'
import NextSeo from 'next-seo';
import Layout from '../components/Layout'
import client from '../client'
import Link from 'next/link'

class IndexPage extends React.Component {
  static async getInitialProps({query, params}) {
    return client.fetch(`
      {
        "pages":
          *[_type == "page"] {
            ...,
            "routes": *[_type == "route" && references(^._id)]
          }
      }
    `)
  }
  render() {
    const {config, pages} = this.props
    return (
      <Layout config={config}>
        <NextSeo
          config={{
            title: 'Simple Usage Example',
            description: 'A short description goes here.',
          }}
        />
        <h1>Welcome to the landing page example</h1>
        <h2>Pages</h2>
        <ul>
          {pages.map(page => {
            const {routes = []} = page
            return (
              <li key={page._id}>
                {page.title}
                <div>
                  <small>
                    {routes.map(route => <Link key={route._id} href={{pathname: '/LandingPage', query: { slug: route.slug.current } }}><a>{route.slug.current}</a></Link>)}
                  </small>
                </div>
              </li>)
          })}
        </ul>
      </Layout>
    )
  }
}

export default IndexPage
