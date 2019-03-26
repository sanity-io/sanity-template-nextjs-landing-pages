import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import styles from './ImageSection.module.css';
import client from '../../client';
import SimpleBlockContent from '../SimpleBlockContent';
import Cta from '../Cta';

const builder = imageUrlBuilder(client);

function ImageSection(props) {
  const { heading, label, text, image, cta } = props;

  if (!image) {
    return null;
  }

  return (
    <div className={styles.root}>
      <figure className={styles.content}>
        <img
          src={builder
            .image(image)
            .width(2000)
            .url()}
          className={styles.image}
          alt={heading}
        />
        <div className={styles.caption}>
          <div className={styles.label}>{label}</div>
          <h2 className={styles.title}>{heading}</h2>
          {text && <SimpleBlockContent blocks={text} />}
          {cta && cta.route && <Cta {...cta} />}
        </div>
      </figure>
    </div>
  );
}
ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.arrayOf(PropTypes.object),
};

export default ImageSection;
