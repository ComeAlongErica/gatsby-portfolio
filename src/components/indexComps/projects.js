import React from 'react'
import styled from 'styled-components'

import Squiggles from '../../assets/zigzag'

const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 100px;
  padding-top: 100px;
  h2 {
    text-align: center;
    font-size: 40px;
    font-weight: 300;
    color: ${props => props.theme.lightGrey};
  }
  p {
    position: relative;
    z-index: 1;
    padding: 10px 20px;
    margin: 0 auto;
    line-height: 25px;
    max-width: 550px;
    color: ${props => props.theme.darkGrey};
    background-color: #ffffff69;
  }
`

const Projects = props => {
  return (
    <Container id={'projects'}>
      <h2>Projects</h2>

      <Squiggles color={'yellow'} height={250} styles={`position: absolute; bottom: -140px; left: -160px; transform: rotate(10deg);`}/>
    </Container>
  )
}
export default Projects
