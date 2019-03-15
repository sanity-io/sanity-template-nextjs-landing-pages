// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import page from './documents/page'
import route from './documents/route'

// Plugs
import * as plugs from './plugs'

// Types
import siteConfig from './types/siteConfig'
import blockContent from './types/blockContent'
import simpleBlockContent from './types/simpleBlockContent'
import cta from './types/cta'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    page,
    route,
    siteConfig,
    blockContent,
    simpleBlockContent,
    cta
  ]).concat(Object.values(plugs))
})
