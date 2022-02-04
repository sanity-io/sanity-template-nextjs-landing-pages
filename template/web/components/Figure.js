import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './Figure.module.css'
import client from '../client'

const builder = imageUrlBuilder(client)

function Figure({node}) {
  const {alt, caption, asset} = node
  if (!asset) {
    return undefined
  }
  return (
    <figure className={styles.content}>
      <img
        src={builder.image(asset).auto('format').width(2000).url()}
        className={styles.image}
        alt={alt}
      />
      {caption && (
        <figcaption>
          <div className={styles.caption}>
            <div className={styles.captionBox}>
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  )
}

Figure.propTypes = {
  node: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
}
export default Figure
