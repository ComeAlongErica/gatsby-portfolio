import React from 'react'
import styled from 'styled-components'

import Squiggles from '../../assets/squiggles'

import planimal from '../../assets/images/planimal.jpg'
import recipe from '../../assets/images/recipe.png'
import lightroom from '../../assets/images/lightroom.jpg'

const projects = [
  {
    name: 'Planimal',
    img: planimal,
    alt: 'planimal screenshot',
    url: 'http://planimal-project.herokuapp.com/',
    github:
      'https://github.com/ComeAlongErica/planimals-reward-based-todo-list-app',
    description:
      'Final project in Grand Circus. A reward based todo app with a digital pet you must keep happy. (AngularJS, PostgreSQL, Node.js, and Express)',
    date: 'December 2018',
  },
  {
    name: 'Double Exposure',
    img: lightroom,
    alt: 'double exposure app screenshot',
    url: 'https://comealongerica.github.io/lightroom-exposure-app/',
    github: 'https://github.com/ComeAlongErica/lightroom-exposure-app',
    description:
      'A photo editing app experimenting with CSS blend modes and animation libraries. (React, React Spring)',
  },
  {
    name: 'Recipe Finder',
    img: recipe,
    alt: 'recipe finder screenshot',
    url: 'https://comealongerica.github.io/recipe-finder-guide/',
    github: 'https://github.com/ComeAlongErica/recipe-finder-guide',
    description:
      'An recipe finder application using Edamam api. (React, Styled Components)',
  },
]

const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 150px;
  padding-top: 100px;
  h2 {
    text-align: center;
    font-size: 40px;
    font-weight: 300;
    color: ${props => props.theme.lightGrey};
  }
`
const ProjectContainer = styled.div`
  position: relative;
  padding: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img-click {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 20px;
    border-radius: 10px;
    margin: 10px;
    height: 185px;
    width: 300px;
    min-width: 300px;
    overflow: hidden;
    transition: 0.3s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
  img {
    width: 100%;
  }
  h3 {
    color: ${props => props.theme.darkGrey};
    font-size: 23px;
    margin: 0;
  }
  p {
    position: relative;
    z-index: 1;
    font-size: 18px;
    line-height: 30px;
    max-width: 550px;
    font-size: 18px;
    font-weight: 300;
    color: ${props => props.theme.lightGrey};
    background-color: #ffffff69;
  }
  .link {
    position: relative;
    width: 200px;
    display: block;
    font-size: 20px;
    text-decoration: none;
    font-weight: 300;
    color: ${props => props.theme.blue};
    svg {
      margin: 0 10px -4px;
      height: 20px;
      width: 20px;
    }
    ::after {
      content: '';
      position: absolute;
      width: 160px;
      height: 2px;
      bottom: 0;
      left: 40px;
      background-color: ${props => props.theme.blue};
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
    :hover {
      ::after {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    flex-direction: row;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    align-items: flex-start;
    margin-left: 20px;
  }
`
const Projects = props => {
  return (
    <Container id={'projects'}>
      <h2>Projects</h2>
      {projects.map((project, idx) => (
        <ProjectContainer
          key={idx}
          data-sal='slide-up'
          data-sal-delay='100'
          data-sal-easing='ease-in'
        >
          <a
            href={project.url}
            aria-label={'view project'}
            className={'img-click'}
          >
            <img src={project.img} alt={project.alt}></img>
          </a>
          <TextContainer>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a
              href={project.github}
              aria-label={'view source code'}
              className={'link'}
            >
              <svg
                stroke='currentColor'
                fill='none'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stoke-linecap='round'
                stoke-linejoin='round'
              >
                <path d='M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3'></path>
                <line x1='8' y1='12' x2='16' y2='12'></line>
              </svg>
              View Source Code
            </a>
          </TextContainer>
        </ProjectContainer>
      ))}
      <Squiggles
        color={'yellow'}
        height={250}
        styles={`position: absolute; bottom: -140px; left: -160px; transform: rotate(10deg);`}
      />
    </Container>
  )
}
export default Projects
