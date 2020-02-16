import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  width: 100vw;
  min-height: 500px;
  background-color: ${props => props.theme.yellow};
  box-sizing: border-box;
  padding: 50px;
`

const AboutMe = () => (
  <Container style={{ color: `teal` }}>
    <h1>About Me</h1>
    <p>Such wow. Very React.</p>
  </Container>
)
export default AboutMe
