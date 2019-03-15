import React from 'react'
import styles from './Cta.module.css'
import Link from 'next/link'

export default function Cta(props) {
  const {title, route, link} = props

  if (route && route.slug && route.slug.current) {
    return (
      <Link
        href={{
          pathname: '/LandingPage',
          query: { slug: route.slug.current }
        }}
        as={`/${route.slug.current}`}
      >
        <a className={styles.button}>{title}</a>
      </Link>
    )
  }

  if (link) {
    return (
      <a className={styles.button} href={link }>{title}</a>
    )
  }

  return <a className={styles.button}>{title}</a>
}
