import React from 'react'
import styled from 'styled-components'

import Blobs from '../../assets/blobs'
import Self from '../../assets/selfportrait'

const Container = styled.section`
  width: 100vw;
  min-height: 650px;
  background-color: ${props => props.theme.yellow};
  padding: 50px;
  position: relative;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    min-height: 500px;
  }
  ::after {
    background: inherit;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100% + 75px);
    transform: skew(0deg, 2deg);
    z-index: -100;
  }
`

const TextContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 800px;
  margin: 50px auto;
  h1 {
    font-size: 50px;
    margin: 10px 0;
    line-height: 55px;
    color: ${props => props.theme.darkGrey};
    span {
      cursor: default;
      transition: 0.3s ease-in-out;
    }
    span:hover {
      color: ${props => props.theme.peach};
    }
  }
  h2 {
    max-width: 350px;
    font-size: 22px;
    font-weight: 300;
    margin: 0;
    line-height: 25px;
    color: ${props => props.theme.lightGrey};
  }
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    margin: 150px auto;
  }
`

const Decor = styled.div`
  width: 90%;
  max-height: 100%;
  position: absolute;
  right: 0;
  bottom: -20px;
  z-index: 1;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    bottom: unset;
    top: 100px;
    width: 50%;
  }
`

const AboutMe = props => {
  const title = "Hello, I'm Erica."
  return (
    <Container>
      <TextContainer>
        <h1>
          {[...title].map((letter, idx) => (
            <span key={idx}>{letter}</span>
          ))}
        </h1>
        <h2>I'm a curious and experimental software developer.</h2>
      </TextContainer>
      <Decor>
        <Self />
        <Blobs smoothBlob color={'darkYellow'} style={`margin-top: 20px;`} />
      </Decor>
    </Container>
  )
}
export default AboutMe
