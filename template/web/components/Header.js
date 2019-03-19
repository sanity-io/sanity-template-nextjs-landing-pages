import React from 'react'
import Link from  'next/link'
import styles from './Header.module.css'
import HamburgerIcon from './icons/Hamburger'
import { withRouter } from 'next/router'
import SVG from 'react-inlinesvg'

class Header extends React.PureComponent  {
  state = { showNav: false }

  componentDidMount() {
    const {router} = this.props
    router.events.on('routeChangeComplete', this.hideMenu)
  }

  componentWillUnmount() {
    const {router} = this.props
    router.events.off('routeChangeComplete', this.hideMenu)
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

  renderLogo = logo => {
    if (!logo || !logo.asset) {
      return null
    }
    if (logo.asset.extension === 'svg') {
      return <SVG src={logo.asset.url} className={styles.logo} />
    }
    return  <img src={logo.asset.url} alt={title} className={styles.logo} />
  }

  render() {
    const {title = 'Missing title', navItems, router, logo} = this.props

    return (
      <div className={styles.root} data-show-nav={this.state.showNav}>
        <h1 className={styles.title}>
          <Link
            href={{
              pathname: '/LandingPage',
              query: {
                slug: '/'
              }
            }}
            as={`/`}
            prefetch
          >
            <a>
              {this.renderLogo(logo)}
            </a>
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
