import React, { useState } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  width: 100vw;
  height: 55px;
  background-color: white;
`
const Menu = styled.div`
  position: absolute;
  width: 300px;
  padding: 50px;
  background: white;
  position: absolute;
  right: 0;
  transform-origin: 0% 0%;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.12);
  ${props => !props.isOpen && 'transform: translate(100%, 0);'}
  ${props =>
    !props.isMobile &&
    'transform: translate(0, 0); background: none; height: 55px; padding: 12px; box-shadow: none; a { padding: 15px;}'}
  a {
    display: ${props => (props.isMobile ? 'block' : 'inline')};
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
      ${props => props.isOpen && 'opacity: 0;'}
    }

    :nth-child(3) {
      ${props => props.isOpen && 'transform: rotate(-45deg);'}
    }
  }
  :hover {
    div {
      background: ${props => props.theme.peach};
    }
  }
`
const Header = props => {
  const { screen } = props
  const [menuIsOpen, setMenuIsOpened] = useState(false)
  const isMobile = screen === 'mobile'
  return (
    <HeaderContainer isOpen={menuIsOpen}>
      {isMobile && (
        <StyledBurger
          isOpen={menuIsOpen}
          onClick={() => setMenuIsOpened(!menuIsOpen)}
        >
          <div />
          <div />
          <div />
        </StyledBurger>
      )}
      <Menu isOpen={menuIsOpen} isMobile={isMobile}>
        <a href={'#about'} onClick={() => setMenuIsOpened(false)}>
          About
        </a>
        <a href={'#projects'} onClick={() => setMenuIsOpened(false)}>
          Projects
        </a>
        <a href={'#contact'} onClick={() => setMenuIsOpened(false)}>
          Contact
        </a>
      </Menu>
    </HeaderContainer>
  )
}
export default Header
