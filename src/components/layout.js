import React from 'react'

import Navi from 'components/Navi/nav'
import Footer from 'components/Footer/footer'
import Logo from 'components/Logo'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './newStyle.css'
import Index from 'components/react-icons/backtoTop.js'
// import Search from 'components/Search/index.js'

// const searchIndices = [
//   { name: `dev_teachers_units`, title: `Units`, hitComp: `PageHit` }
// ] 

class Layout extends React.Component {

  render() {
    const { children } = this.props
    return (
      <div>
        <div className="container"><a className="sr-only sr-only-focusable" href="#content">Skip to main content</a></div>
        <header className="container">
          <div className="row">
          <Logo />
          {/* <Search className="search-zone" collapse indices={searchIndices} /> */}
          {/* <Search /> */}
          </div>
        </header>
        <div className="zone-menu-wrapper"><Navi /></div>
        <div className="container py-3" id="content">{children}</div>
        <Footer />
        <Index />
      </div>
    )
  }
}

export default Layout
