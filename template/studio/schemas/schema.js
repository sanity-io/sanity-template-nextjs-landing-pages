// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './page'
import route from './route'

// Object types
import cta from './cta'
import embedHTML from './embedHTML'
import figure from './figure'
import internalLink from './internalLink'
import link from './link'
import portableText from './portableText'
import simplePortableText from './simplePortableText'
import siteConfig from './siteConfig'

// Landing page sections
import hero from './hero'
import imageSection from './imageSection'
import mailchimp from './mailchimp'
import textSection from './textSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    textSection
  ])
})
