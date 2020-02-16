import React from 'react'
import styled from 'styled-components'

import Blobs from '../assets/blobs'
import Self from '../assets/selfportrait'

const Container = styled.section`
  width: 100vw;
  min-height: 500px;
  background-color: ${props => props.theme.yellow};
  box-sizing: border-box;
  padding: 50px;
  position: relative;
`

const Decor = styled.div`
  width: 50%;
  max-height: 100%;
  position: absolute;
  right: 0;
  top: 100px;
`

const AboutMe = props => {
  const {layout} = props

  return (
  <Container>
    <h1>About Me</h1>
    <Decor>
      {!(layout === 'mobile') && <Self />}
      <Blobs smoothBlob color={'darkYellow'} style={`margin-top: 20px;`}/>
    </Decor>
  </Container>
)}
export default AboutMe
