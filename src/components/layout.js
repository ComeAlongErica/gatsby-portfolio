import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from '../assets/ThemeProvider'
import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: overpass, Trebuchet MS, sans-serif;
    margin: 0;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </ThemeProvider>
)

export default Layout
