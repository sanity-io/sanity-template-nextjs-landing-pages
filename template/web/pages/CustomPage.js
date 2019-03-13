import React from 'react'
import Layout from '../components/Layout'

class CustomPage extends React.Component {
  render() {
    const {config} = this.props
    return (
      <Layout config={config}>
        <h1>A custom page</h1>
      </Layout>
    )
  }
}

export default CustomPage
