const { SitemapStream, streamToPromise } = require( 'sitemap' )
const {exportPathMap} = require('./next.config')
const fs = require('fs')
const client = require('./client')
const { Readable } = require('stream')

client.fetch(`*[_id == "global-config"] {url}[0]`).then(config => {
  exportPathMap().then(res => {
    const stream = new SitemapStream({
      hostname: config.url,
      cacheTime: 600000 // 600 sec (10 min) cache purge period
    })

    const links = Object.keys(res).filter(page => {
      const item = res[page]
      const {includeInSitemap, disallowRobots} = item
      return (includeInSitemap && !disallowRobots)
    }).map(page => {
      const item = res[page]
      const {_updatedAt} = item
      return { url: page, lastmod: new Date(_updatedAt) }
    })

    console.log(links)
    // Return a promise that resolves with your XML string
    streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
      data.toString()
    ).then(
      xmlString => {
        fs.writeFile(`./out/sitemap.xml`, xmlString, err => {
          if (err) throw err
          console.log(`sitemap.xml updated`)
        })
      }
    )
  })
})
