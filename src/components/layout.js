import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Model 3 energy usage data' },
            { name: 'keywords', content: 'Model3, Tesla, energy, consumption, kwh, kilowatts' },
            { property: 'og:image', content: 'http://yakshaving.s3.amazonaws.com/og.png'},
            { property: 'og:image:url', content: 'http://yakshaving.s3.amazonaws.com/og.png'},
            { property: 'og:url', content: 'https://model3energy.netlify.com/'},
            { property: 'og:title', content: 'Model 3 energy usage data'},
            { property: 'og:description', content: 'Track energy consumption of your Model 3 relative to others'},
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
