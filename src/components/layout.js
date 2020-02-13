import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/ThemeProvider"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    {children}
    <Footer />
  </ThemeProvider>
)

export default Layout
