import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client'
import {pick} from 'lodash'

export default function SimpleBlockContent(props) {
  return <BlockContent {...props} {...pick(client.clientConfig, ['projectId', 'dataset'])} />
}
