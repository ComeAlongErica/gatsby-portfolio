import React from 'react'
import styled from 'styled-components'

import Github from '../assets/icons/github'
import LinkedIn from '../assets/icons/LinkedIn'
import Instagram from '../assets/icons/Instagram'

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${props => props.theme.blue};
  padding: 50px 10px;
  margin-top: 50px;
`
const HeaderText = styled.h2`
  margin: 50px 0 0;
  text-align: center;
  font-size: 30px;
  color: white;
  width: 100%;
`

const Footer = () => (
  <FooterContainer id={'contact'}>
    <HeaderText>Let's Connect!</HeaderText>
    <a href={'https://github.com/ComeAlongErica'} aria-label={'view github'}>
      <Github />
    </a>
    <a
      href={'https://www.linkedin.com/in/ericaraeperry/'}
      aria-label={'view linkedin'}
    >
      <LinkedIn />
    </a>
    <a
      href={'https://www.instagram.com/comealongerica/'}
      aria-label={'view instagram'}
    >
      <Instagram />
    </a>
  </FooterContainer>
)
export default Footer
