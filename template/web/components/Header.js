import React from 'react'
import Link from  'next/link'
import styles from './Header.module.css'
import HamburgerIcon from './icons/Hamburger'
import { withRouter } from 'next/router'

class Header extends React.PureComponent  {
  state = { showNav: false }

  componentDidMount() {
    const {router} = this.props
    router.events.on('routeChangeComplete', this.hideMenu)
  }

  hideMenu = () => {
    this.setState({showNav: false})
  }

  handleMenuToggle = () => {
    const {showNav} = this.state
    this.setState({
      showNav: !showNav
    })
  }
  render() {
    const {title = 'Missing title', navItems, router} = this.props
    return (
      <div className={styles.root} data-show-nav={this.state.showNav}>
        <h1 className={styles.title}>
          <Link
            href={{ pathname: '/'}}
            as={`/`}
            prefetch
          >
            <a>{title}</a>
          </Link>
        </h1>
        <nav className={styles.nav}>
          <ul className={styles.navItems}>
            {navItems && navItems.map(item => {
              const isActive = router.pathname === '/LandingPage' && router.query.slug === item.slug.current
              return (
                <li key={item._id} className={styles.navItem}>
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
          <HamburgerIcon className={styles.hamburgerIcon} onClick={this.handleMenuToggle} />
        </nav>
      </div>
    )
  }
}

export default withRouter(Header)
