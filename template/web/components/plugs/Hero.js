import React from 'react'
import styles from './Hero.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function Hero(props) {
  const {heading, backgroundImage, tagline} = props

  const style = backgroundImage ? {backgroundImage: `url("${urlFor(backgroundImage)}")`} : {}

  return (
    <div className={styles.root} style={style}>
      <h1 className={styles.title}>{heading}</h1>
      <div className={styles.tagline}>
        {tagline && <SimpleBlockContent blocks={tagline} />}
      </div>
    </div>
  )
}
