import React from 'react'
import styled from 'styled-components'

import Github from './parts/icons/github'
import LinkedIn from './parts/icons/LinkedIn'
import Instagram from './parts/icons/Instagram'

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
