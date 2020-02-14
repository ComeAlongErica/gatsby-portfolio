import React from 'react'
import styled from 'styled-components'

const Icon = styled.svg`
  padding: 20px;
  cursor: pointer;
  stroke-width: 2;
  stroke: ${props => props.theme.lightGrey};
  transition: .3s ease-in-out;
  &:hover {
    stroke: ${props => props.theme.peach};
  }
`

const LinkedIn = () => (
  <Icon
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
    <rect x='2' y='9' width='4' height='12'></rect>
    <circle cx='4' cy='4' r='2'></circle>
  </Icon>
)
export default LinkedIn
