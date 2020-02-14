import React, { useState, useEffect } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from '../assets/ThemeProvider'
import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: overpass, Trebuchet MS, sans-serif;
    margin: 0;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
`

const Layout = ({ children }) => {
  const [hasRan, setHasRan] = useState(false)
  const [screenSize, setScreenSize] = useState()
  const updateScreenSize = () => {
    setScreenSize(determineScreen(window.innerWidth))
  }
  useEffect(() => {
    if (!hasRan) {
      setHasRan(true)
      updateScreenSize()
    }
    window.addEventListener('resize', updateScreenSize)
    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [screenSize])

  const determineScreen = width => {
    let screenSize = 'mobile'
    if (width > theme.desktop) {
      screenSize = 'desktop'
    } else if (width > theme.tablet) {
      screenSize = 'tablet'
    }
    return screenSize
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header screen={screenSize} />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
