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
  html {
    scroll-behavior: smooth;
  }
  * {
    box-sizing: border-box;
    }

`

const Layout = ({ children }) => {
  const [screenSize, setScreenSize] = useState()
  const [scrollPosition, setScrollPosition] = useState()

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(determineScreen(window.innerWidth))
    }
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
      <Header screen={screenSize} sticky={scrollPosition > 293} />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
