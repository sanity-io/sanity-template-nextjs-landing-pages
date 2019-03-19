import React from 'react'
import styles from './Hero.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function Hero(props) {
  const {heading, backgroundImage, tagline, ctas} = props

  const style = backgroundImage ? {backgroundImage: `url("${urlFor(backgroundImage).width(2000).url()}")`} : {}

  return (
    <div className={styles.root} style={style}>
      <div className={styles.content}>
        <h1 className={styles.title}>{heading}</h1>
        <div className={styles.tagline}>
          {tagline && <SimpleBlockContent blocks={tagline} />}
        </div>
        {ctas && (
          <div className={styles.ctas}>
            {
              ctas.map(cta => {
                return <Cta {...cta} key={cta._key} />
              })
            }
          </div>
        )}
      </div>
    </div>
  )
}
