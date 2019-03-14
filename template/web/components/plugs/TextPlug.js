import React from 'react'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextPlug.module.css'

export default function TextPlug(props) {
  const {heading, label, text} = props
  return (
    <article className={styles.root}>
      <p>{label}</p>
      <h2>{heading}</h2>
      <SimpleBlockContent blocks={text} />
    </article>
  )
}
