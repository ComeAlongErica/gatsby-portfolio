import React from 'react'
import styled from 'styled-components'

import Github from '../assets/icons/github'
import LinkedIn from '../assets/icons/LinkedIn'
import Instagram from '../assets/icons/Instagram'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
`

const Footer = () => (
  <FooterContainer>
    <Github />
    <LinkedIn />
    <Instagram />
  </FooterContainer>
)
export default Footer
