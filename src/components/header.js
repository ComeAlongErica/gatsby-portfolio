import React, { useState } from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
const HeaderContainer = styled.header`
  position: relative;
  height: 50px;
`
const Menu = styled.header`
  position: absolute;
  width: 300px;
  margin: -100px 0 0 0;
  padding: 50px;
  padding-top: 125px;
  right: -100px;
  background: white;
  position: absolute;
  transform-origin: 0% 0%;
  ${props => !props.isOpen && 'transform: translate(100%, 0);'}
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  a {
    display: block;
    text-decoration: none;
    color: ${props => props.theme.darkGrey};
    font-size: 1.25rem;
    text-transform: lowercase;
  }
  a:active,
  a:hover {
    color: ${props => props.theme.peach};
  }
`
const StyledBurger = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.theme.darkGrey};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      ${props => props.isOpen && 'transform: rotate(45deg);'}
    }

    :nth-child(2) {
      ${props => props.isOpen && 'transform: translateX(20px); opacity: 0;'}
    }

    :nth-child(3) {
      ${props => props.isOpen && 'transform: rotate(-45deg);'}
    }
    :hover {
      background: ${props => props.theme.peach};
    }
  }
`
const Header = props => {
  const { screen } = props
  const [menuIsOpen, setMenuIsOpened] = useState(screen === 'mobile')
  return (
    <HeaderContainer isOpen={menuIsOpen}>
      <StyledBurger
        isOpen={menuIsOpen}
        onClick={() => setMenuIsOpened(!menuIsOpen)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <Menu isOpen={menuIsOpen}>
        <Link to='/'> Home</Link>
        <Link to='/contact/'>Contact</Link>
        <Link to='/blog/'> Blog</Link>
      </Menu>
    </HeaderContainer>
  )
}
export default Header
