import React from 'react'
import styled from 'styled-components'

const Icon = styled.svg`
  fill: ${props => props.theme[props.color]};
  ${props => props.styles}
  max-width: 450px;
`

const Blobs = props => {
  const { smoothLumps, twoLumps, fourLumps, height, color, style } = props
  return (
    <>
      <Icon
        color={color}
        styles={style}
        data-name='smooth-blob'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 346 297'
      >
        <title>Smooth Blob</title>
        <path d='M346.22,156.51c1.18,23.48-7,44.3-18.81,64-6.37,10.64-12.17,21.87-20.07,31.29-20.3,24.2-45.95,40.18-77.72,44.49-27.41,3.72-54.26-1.57-80.87-7.21-31.1-6.6-61.22-16.41-89.17-31.87-18.36-10.16-36.3-21.11-48.44-39C4.27,208.05,1.29,196.54.67,184.38c-1.49-29,.66-57.75,9.08-85.67C17.76,72.13,29.9,47.55,50.13,28,77.37,1.75,109.39-5.3,145.8,5.35c12,3.5,24.56,4.92,36.86,7.31C209.92,18,236.85,24,260.36,40.11c13.41,9.16,28.09,16.66,40.65,26.83,23.92,19.36,40.46,43.88,45.12,75.09C346.83,146.76,346.22,151.68,346.22,156.51Z' />
      </Icon>
    </>
  )
}
export default Blobs
