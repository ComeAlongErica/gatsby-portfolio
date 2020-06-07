import React from 'react'
import styled from 'styled-components'

import Blobs from '../../assets/blobs'

const Container = styled.section`
  margin: 250px 0 0;
  width: 100vw;
  min-height: 350px;
  /* background-color: ${props => props.theme.peach}; */
  padding: 50px;
  position: relative;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    min-height: 400px;
  }
  ::before {
    background: inherit;
    background-color: ${props => props.theme.peach};
    content: '';
    position: absolute;
    left: 0;
    top: -50px;
    width: 100%;
    height: 75%;
    transform: skew(0deg, -2deg);
    z-index: -100;
  }
  ::after {
    background: inherit;
    background-color: ${props => props.theme.peach};
    content: '';
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 100%;
    height: 75%;
    transform: skew(0deg, 2deg);
    z-index: -100;
  }
  h2 {
    position: relative;
    z-index: 2;
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
    color: ${props => props.theme.lightGrey};
  }
  p {
    position: relative;
    z-index: 2;
    padding: 10px 20px;
    margin: 0 auto;
    max-width: 550px;
    display: flex;
    flex-wrap: wrap;
    line-height: 21px;
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
  const languages = ['Javascript', 'Python', 'HTML5', 'CSS3', 'Typescript']
  const frameworks = [
    'React',
    'MobX',
    'Gatsby',
    'Jest',
    'Express',
    'GraphQL',
    'AngularJS',
    'NodeJS'
  ]
  const tools = [
    'Git',
    'Github',
    'Jira',
    'PostgreSQL',
    'AWS',
    'VSCode',
    'Postman',
  ]
  const nextUp = ['Storybook', 'Electron', 'Flask']
  return (
    <Container>
      <h2>My Development Backpack</h2>
      <div data-sal='slide-up' data-sal-delay='100' data-sal-easing='ease-in'>
        <h3>Languages</h3>
        <p>
          {languages.map((language, idx) => (
            <span key={idx}>{language}</span>
          ))}
        </p>
      </div>
      <div data-sal='slide-up' data-sal-delay='100' data-sal-easing='ease-in'>
        <h3>Libraries & Frameworks</h3>
        <p>
          {frameworks.map((framework, idx) => (
            <span key={idx}>{framework}</span>
          ))}
        </p>
      </div>
      <div data-sal='slide-up' data-sal-delay='100' data-sal-easing='ease-in'>
        <h3>Tools & Other</h3>
        <p>
          {tools.map((tool, idx) => (
            <span key={idx}>{tool}</span>
          ))}
        </p>
      </div>
      <div data-sal='slide-up' data-sal-delay='100' data-sal-easing='ease-in'>
        <h3>Next Up</h3>
        <p>
          {nextUp.map((tool, idx) => (
            <span key={idx}>{tool}</span>
          ))}
        </p>
      </div>
      <Blobs
        fourLumps
        color={'darkYellow'}
        style={`position: absolute; z-index: 1; right: 10px; bottom: -100px; width: 45%; max-width: 300px;`}
      />
    </Container>
  )
}
export default Development
