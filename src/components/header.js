import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const HeaderContainer = styled.header`
`

const Header = () => (
  <HeaderContainer>
    <Link to='/contact/'>Contact</Link>
    <Link to='/blog/'> Blog</Link>
    <Link to='/'> Home</Link>
    <h1>About Gatsby</h1>
    <p>Such wow. Very React.</p>
  </HeaderContainer>
)
export default Header
