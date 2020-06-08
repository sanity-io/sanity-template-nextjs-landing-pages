import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import styles from './Footer.module.css'
import SimpleBlockContent from './SimpleBlockContent'

const languages = [
  {code: 'en', label: 'English'},
  {code: 'nb', label: 'Norwegian'},
  {code: 'es', label: 'Spanish'}
]

function Footer (props) {
  const {navItems, text, router} = props
  return (
    <div className={styles.root}>
      <nav>
        <ul className={styles.items}>
          {navItems &&
            navItems.map(item => {
              const isActive =
                router.pathname === '/LandingPage' && router.query.slug === item.slug.current
              return (
                <li key={item._id} className={styles.item}>
                  <Link
                    href={{
                      pathname: '/LandingPage',
                      query: {slug: item.slug.current}
                    }}
                    as={`/${item.slug.current}`}
                    prefetch
                  >
                    <a data-is-active={isActive ? 'true' : 'false'}>{item.title}</a>
                  </Link>
                </li>
              )
            })}
        </ul>
        <select onChange={(event) => router.push(`/${event.target.value}`)} className={styles.lang} value={router.query.lang}>
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.label}</option>
          ))}
        </select>
      </nav>
      <div className={styles.text}>
        <SimpleBlockContent blocks={text} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string
      }).isRequired
    })
  ),
  text: PropTypes.arrayOf(PropTypes.object),
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      lang: PropTypes.string,
      slug: PropTypes.string
    }),
    push: PropTypes.func
  })
}

export default withRouter(Footer)
