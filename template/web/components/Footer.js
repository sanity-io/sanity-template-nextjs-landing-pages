import React from 'react'
import Link from  'next/link'
import styles from './Footer.module.css'
import { withRouter } from 'next/router'
import SimpleBlockContent from './SimpleBlockContent'

function Layout(props) {
  const {navItems, text, router} = props
  return (
    <div className={styles.root}>
      <div>
        <nav className={styles.nav}>
          <ul className={styles.items}>
            {navItems && navItems.map(item => {
              const isActive = router.pathname === '/LandingPage' && router.query.slug === item.slug.current
              return (
                <li key={item._id} className={styles.item}>
                  <Link
                    href={{ pathname: '/LandingPage', query: { slug: item.slug.current } }}
                    as={`/${item.slug.current}`}
                    prefetch
                  >
                    <a data-is-active={isActive ? 'true' : 'false'}>
                      {item.title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={styles.text}>
          <SimpleBlockContent blocks={text} />
        </div>
      </div>
    </div>
  )
}

export default withRouter(Layout)
