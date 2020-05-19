/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Link from "react-dom"
import Header from "./header"
import styled from "styled-components"
import "../styles/layout.css"
import { isLogged } from "./auth"

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  text-align: center;
  font-size: 12px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.omobio_light_yellow};
  background-color: lightgrey;
`

const Layout = () => {
  const siteTitle = "Luxe Fashions"

  return (
    <>
      <Header siteTitle={siteTitle} loginStatus={isLogged()} />
      <div
        style={{
          height: "auto",
          margin: `0 auto`,
          padding: `1.20rem 1.0875rem 1.20rem 1.0875rem`
        }}
      ></div>
      <Footer>
        <div>
          <a href="http://www.example.net">Omobio {`  `}</a>©{" "}
          {new Date().getFullYear()}
          {` | `}
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
