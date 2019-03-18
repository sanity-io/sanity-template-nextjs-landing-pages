import React from 'react'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextPlug.module.css'

export default function TextPlug(props) {
  const {heading, label, text} = props
  return (
    <div className={styles.root}>
      <article className={styles.article}>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.heading}>{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
      </article>
    </div>
  )
}
