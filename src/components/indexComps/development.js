import React from 'react'
import styled from 'styled-components'

import Blobs from '../../assets/blobs'

const Container = styled.section`
  margin: 250px 0;
  width: 100vw;
  min-height: 350px;
  background-color: ${props => props.theme.peach};
  padding: 50px;
  position: relative;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    min-height: 400px;
  }
  ::before {
    transform: skewY(-2deg);
    transform-origin: 100% 0;
    position: absolute;
    background: inherit;
    content: '';
    position: absolute;
    left: 0;
    top: -80px;
    height: 80px;
    width: 100%;
    -webkit-backface-visibility: hidden;
  }
  ::after {
    transform: skewY(2deg);
    transform-origin: 0 100%;
    position: absolute;
    background: inherit;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    bottom: 0px;
    height: 80px;
    width: 100%;
    -webkit-backface-visibility: hidden;
  }
  h2 {
    margin-top: -20px;
    text-align: center;
    font-size: 30px;
    color: ${props => props.theme.darkGrey};
  }
  h3 {
    position: relative;
    z-index: 2;
    padding: 10px 20px;
    margin: 0 auto;
    font-weight: 800;
    line-height: 25px;
    max-width: 550px;
  }
  p {
    position: relative;
    z-index: 2;
    padding: 10px 20px;
    margin: 0 auto;
    line-height: 38px;
    max-width: 550px;
    color: ${props => props.theme.darkGrey};
    span {
      width: auto;
      border-radius: 5px;
      background: #ffffff73;
      padding: 5px 8px;
      margin: 5px;
    }
  }
`

const Development = props => {
  const languages = ['Javascript', 'Python', 'HTML5', 'CSS3']
  const frameworks = ['React', 'Gatsby', 'Jest', 'Express', 'GraphQL', 'AngularJS']
  const tools = ['Git', 'Github', 'Jira', 'PostgreSQL', 'AWS', 'VS Code']
  return (
    <Container>
      <h2>My Development Backpack</h2>
      <h3>Languages</h3>
      <p>
        {languages.map(language => (
          <span>{language} </span>
        ))}
      </p>
      <h3>Libraries & Frameworks</h3>
      <p>
        {frameworks.map(framework => (
          <span>{framework} </span>
        ))}
      </p>
      <h3>Tools & Other</h3>
      <p>
        {tools.map(tool => (
          <span>{tool} </span>
        ))}
      </p>
      <Blobs fourLumps color={'yellow'} style={`position: absolute; z-index: 1; right: 10px; bottom: -100px; width: 50%; max-width: 350px;`} />
    </Container>
  )
}
export default Development
