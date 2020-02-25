import React from 'react'
import styled from 'styled-components'

const Icon = styled.svg`
  margin: 20px;
  cursor: pointer;
  stroke-width: 2;
  stroke: white;
  transition: 0.3s ease-in-out;
  &:hover {
    stroke: ${props => props.theme.peach};
  }
`

const Instagram = () => (
  <Icon
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
    <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
  </Icon>
)
export default Instagram
