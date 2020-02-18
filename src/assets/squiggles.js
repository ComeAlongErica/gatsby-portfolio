import React from 'react'
import styled from 'styled-components'

const Icon = styled.svg`
  fill: ${props => props.theme[props.color]};
  max-width: 500px;
  stroke: ${props => props.theme[props.color]};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  height: ${props => props.height}px;
  ${props => props.styles}
`

const Squiggles = props => {
  const { height, color, styles } = props
  return (
    <Icon
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 565.2 181.8'
      height={height}
      color={color}
      styles={styles}
    >
      <path
        d='M86.4,97.5c15.2-0.3,30.7,2.7,46,8.7c18.2,7.2,36.3,9.5,54.5,0.6c5.6-2.8,11.2-6,16-9.9c19.7-16.3,40.1-16.9,61.9-4.7
   c7.8,4.4,16.2,7.7,24.4,11.2c10,4.1,19.1,3.2,27.8-4.2c6.4-5.5,13.7-10,20.8-14.5c20.2-12.8,40.1-9.8,59.6,1.9
   c9,5.3,17.9,10.9,27.3,15.3c18.8,8.7,36.1,6,52.2-7.7c10.5-9,21.8-17.5,33.9-24.2c11.5-6.5,25.4-4.7,36.9,1.1
   c5.4,2.7,11.2,6.7,15,11.4c4.1,5,3.1,15.4-6,11.3c0,0-0.1,0-0.1,0c-2.9-1.4-5.2-4-8-5.9c-15.8-10.8-29.6-10-44,2.3
   c-7.2,6.1-14.6,12.1-21.9,18c-19.2,15.6-40.6,15.9-62.4,7.3c-10.9-4.3-21.1-10.4-31.2-16.4c-19.9-11.7-31.7-11.3-50.2,2.8
   c-5.1,3.9-10.4,7.7-15.6,11.6c-11,8.3-23.1,9.7-35.7,5.1c-9-3.3-18.1-6.9-26.4-11.7c-23-13.2-29.8-12.9-50.3,4
   c-14.5,11.9-31.2,19.1-49.9,18.2c-10.9-0.5-21.6-4.6-32.3-7.1c-13.2-3.1-26.3-7.8-39.6-8.9c-8.9-0.7-18.7,2.6-27.2,6.2
   c-8.8,3.7-17.2,8.2-25.6,12.6c-7.1,3.8-14.6,8.9-23,8.6c-1.8-0.1-3.7-0.5-4.7-1.9c-1.1-1.6-0.8-3.8,0.3-5.4
   c3.6-5.1,11.2-8.9,16-12.8C43.8,105.3,64.7,98,86.4,97.5z'
      />
      <path
        d='M101.1,131c0.1,0,0.1,0,0.2,0c18.7-0.4,39.2,5.2,57.4,9.1c21.7,4.6,40.1-0.6,55.9-15.7c11.7-11.2,24.6-15,40-8
   c10.6,4.8,21.4,9,32.1,13.5c18.9,7.9,37,6,52.9-6.7c18.9-15,38.4-15.2,59.8-6.1c20,8.5,41,16.8,62.8,18.4c4.2,0.3,8.5,0.4,12.6-0.7
   c9.1-2.5,15.2-10.1,22.2-15.7c7.9-6.3,16.4-12.5,25.1-17.7c11.9-7.2,31.4,0.3,37.2,13.1c0.1,0.1,0.1,0.3,0.2,0.4
   c0.8,2.8-1.9,5.4-4.7,4.7c-0.2-0.1-0.5-0.1-0.7-0.2c-0.6-0.2-1.1-0.7-1.7-1.1c-16.2-11.7-20.5-10.6-36.1,2.5
   c-6.8,5.6-13.2,11.6-19.6,17.8c-13.1,12.7-29.3,11.5-45.5,10.3c-22.3-1.5-41.6-12.2-61.6-20.4c-15.3-6.3-27.5-3.6-40.3,6.7
   c-21.9,17.4-46.3,19.9-71.8,7.5c-8.4-4.1-17.1-7.3-25.4-11.6c-11.6-6.1-20.5-3.2-29.3,5.8c-10.4,10.7-23.3,18.7-38.2,19.8
   c-12.9,1-26-1.4-39-2.8c-13-1.5-25.8-4.5-38.8-5.3c-17.5-1.1-33,5.5-47.6,15c-12.6,8.2-29.3,22.3-45.1,17.2c-1.2-0.4-2.4-0.9-3-1.9
   c-0.7-1.2-0.4-2.8,0.2-4.1c4.6-9.8,18.1-14.3,26.5-20C56.4,142.2,78.4,131.5,101.1,131z'
      />
      <path
        d='M558.5,8c4.9,4.3-0.2,12.1-6.1,9.2c-5.8-2.9-11.4-6.2-18.6-5.9c-11.6,0.6-21.8,8.1-30.4,15.3c-7.1,5.9-13.6,12.7-20.9,18.4
   c-18.2,14.3-37.9,14.5-57.9,4.4c-11.4-5.8-22-13-33.2-19c-6.1-3.3-12.6-6.6-19.3-7.5c-4.8-0.6-10.4,2.3-15.2,4.6
   c-8.9,4.3-17.2,10-26.3,13.9c-12.1,5.2-24.3,3.8-36.2-1.8c-10.7-5-21.4-9.9-32.3-14.3c-18.9-7.7-35.2-2.7-50,10.4
   c-5.4,4.8-11.3,9.3-17.4,13.3c-17.1,11.2-34.7,12.4-53.3,3.2c-14.6-7.2-29.4-14-44.4-20C72.4,22.4,49.8,28.7,29,43.2
   c-5.5,3.9-20.8,13.1-27.8,8.5C-5.7,47.1,19.9,28.1,23.4,26c11-6.5,23.5-10.8,36.1-12.8c14.5-2.3,28.9-0.2,42.6,5.2
   c14,5.6,28.1,11.2,41.5,18.1c19.1,9.9,35.7,6.7,51.6-6.5c4.6-3.8,9.4-7.3,14.2-11c19-14.7,39.7-15.1,61.1-6.6
   c8.6,3.4,17.3,7.1,25.1,12.1c18,11.6,33.5,7.2,48.6-5.5c3.9-3.3,8.4-6,13-8.2c15.4-7.4,28.8-0.5,41.7,6.9
   c11.5,6.6,22.4,14.4,34.1,20.6c17.4,9.2,30,6.8,44.4-6.6c12.7-11.8,25.5-23.4,42-29.9C528.5-1.7,548.9-0.4,558.5,8z'
      />
      <path d='M532.8,1.5c0.1,1,0.2,2,0.2,3' />
    </Icon>
  )
}
export default Squiggles