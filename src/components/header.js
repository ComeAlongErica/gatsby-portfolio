import React, { useState } from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const HeaderContainer = styled.header`
a {
 display: block;
 text-decoration: none;
 color: ${props => props.theme.darkGrey};
 font-size: 1.25rem;
 text-transform: lowercase;
}
a:active, a:hover {
 color: ${props => props.theme.peach};
}
`

const Header = props => {
  const { screen } = props
  const [menuIsOpen, setMenuIsOpened] = useState(screen === 'mobile')
  return (
    <HeaderContainer>
      <Link to='/contact/'>Contact</Link>
      <Link to='/blog/'> Blog</Link>
      <Link to='/'> Home</Link>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
    </HeaderContainer>
)}
export default Header
