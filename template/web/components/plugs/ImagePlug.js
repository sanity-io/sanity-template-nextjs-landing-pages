import React from 'react'
import styles from './ImagePlug.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export default function Hero(props) {
  const {heading, label, text, image, cta} = props

  if (!image) {
    return null
  }

  return (
    <div className={styles.root}>
      <figure className={styles.content}>
        <img src={builder.image(image).width(2000).url()} className={styles.image} />
        <div className={styles.caption}>
          <div className={styles.label}>{label}</div>
          <h2 className={styles.title}>{heading}</h2>
          {text && <SimpleBlockContent blocks={text} />}
          {
            cta && cta.route && <Cta {...cta} />
          }
        </div>
      </figure>
    </div>
  )
}
