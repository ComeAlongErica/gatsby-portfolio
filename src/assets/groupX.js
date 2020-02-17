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

const GroupX = props => {
  const { height, color, styles } = props
  return (
    <Icon
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='761px'
      viewBox='0 0 761 475.9'
      height={height}
      color={color}
      styles={styles}
    >
      <path
        d='M448.3,388.7c5.1,4.6,9.8,8.6,14.2,12.8c1.5,1.5,3.3,3.5,3.4,5.4c0.5,6-1.3,9.9-8.4,7.9c-5.8-1.6-11.2-4.7-17.2-7.4
	c-0.2,0.5-0.8,1.9-1.6,3.1c-6.1,9.4-12.2,18.9-18.5,28.2c-0.8,1.2-4.3,2.1-4.7,1.6c-1.2-1.5-2.6-4.1-2.1-5.6
	c4.1-11.6,8.5-23,13-34.4c1-2.5,1.9-4-1.1-5.9c-5.5-3.5-10.6-7.6-15.8-11.6c-1-0.8-2.2-1.6-2.6-2.7c-0.7-1.8-1.6-4.1-1-5.6
	c0.5-1.1,3.6-1.9,5.1-1.4c5.7,1.8,11.4,3.8,16.8,6.3c8.4,3.9,8.2,4,13.6-3.4c2.8-3.9,5.9-7.7,9.6-10.8c1.6-1.3,4.9-0.6,7.4-0.8
	c-0.5,2.3-0.8,4.7-1.6,6.9c-0.6,1.8-2,3.3-2.9,5C451.9,380.6,450,384.9,448.3,388.7z'
      />
      <path
        d='M120.1,411.1c4.1-5.5,8-10.8,12-15.8c1.2-1.5,3-2.9,4.9-3.6c1.1-0.4,3.4,0,4.1,0.8c0.6,0.9,0.3,3-0.4,4.2
	c-3.4,6.6-7.2,13-10.5,19.7c-0.5,0.9,0.2,3,1.1,4c2.1,2.6,4.6,4.8,6.9,7.2c1.9,2,2.9,5.6,6.9,4.3c0.6,2.4,2.3,5.1,1.6,7
	c-0.8,2.3-3.6,5.2-5.7,5.4c-6.6,0.5-11.3-4.2-16-8.1c-1-0.8-1.5-2.4-2.5-4c-4.7,7.7-8.2,14.3-12.5,20.3c-5.1,7.2-10.8,14-16.4,20.8
	c-1,1.2-2.9,1.7-4.4,2.6c-1-1.8-2.9-3.7-2.8-5.5c0.2-3.2,1.1-6.7,2.7-9.5c6.9-12.1,14.1-24.1,21.5-35.9c1.4-2.2,1.4-3.3-0.4-5.2
	c-5.4-5.7-10.7-11.4-15.8-17.4c-1-1.2-0.9-3.4-1.3-5.1c2.1-0.1,4.8-1.1,6.3-0.2c5.8,3.3,11.2,7.2,16.7,11
	C117.5,409.1,118.7,410.1,120.1,411.1z'
      />
      <path
        d='M53,258.6c1.8-5.8,3.8-11.5,5.4-17.2c1-3.7,3.4-5.1,6.9-4.3c3.7,0.9,3,3.7,2.5,6.5c-1.2,7.6-2.3,15.2-3.1,22.8
	c-0.1,1.1,1.2,2.7,2.3,3.6c3.6,3.1,7.4,5.9,11.2,8.8c5.3,4.2,7.3,12.1,4.7,18.5c-1.3,3.2-3.5,4.8-6.5,2.7
	c-5.4-3.7-10.4-7.7-15.9-11.8c-0.6,1.9-1.4,4.4-2.3,6.9c-2.3,7.1-4.6,14.2-7,21.2c-0.4,1.2-1.7,2-2.6,3c-1.1-0.9-3-1.8-3-2.8
	c-0.5-7-1.1-14.1-0.7-21c0.4-6.8,2.2-13.6,3.2-20.4c0.2-1.3-0.6-3-1.5-4.1c-3.4-4.2-7-8.2-10.5-12.2c-0.3-0.4-0.9-0.7-1-1.2
	c-0.6-2.1-1-4.2-1.5-6.3c2.3-0.1,5-1.1,6.9-0.3C44.7,252.9,48.6,255.8,53,258.6z'
      />
      <path
        d='M440,221.3c-5.4,8.2-10.7,16.2-16,24.1c-0.6,1-1.3,2.2-2.3,2.5c-1.7,0.7-3.7,0.8-5.5,1.1c-0.3-1.9-1.3-4-0.7-5.6
	c4.1-10.4,8.7-20.5,12.9-30.9c0.5-1.2,0.2-3.4-0.7-4.2c-5-5-10.3-9.7-15.4-14.6c-1.5-1.4-3.1-2.8-3.9-4.6c-0.7-1.5-1.2-4.6-0.5-5
	c1.5-0.9,4.1-1.4,5.6-0.7c8,3.6,15.9,7.6,24.1,11.6c4.6-3.8,3.9-14.5,14.9-13.6c-1.3,4.1-1.9,7.9-3.7,11.2
	c-3.9,7.2-1.2,11.5,4.7,16.1c4.8,3.8,8.8,9,12.1,14.2c1.3,2,0.3,6.2-1,8.6c-0.8,1.4-4.9,2.3-6.7,1.5c-4.5-1.9-8.6-4.8-12.8-7.6
	C443.1,224.3,441.4,222.5,440,221.3z'
      />
      <path
        d='M683.3,76.1c0.3-5,0.1-10.1,1.1-14.9c1.8-8.5,4.2-16.9,6.8-25.2c0.9-2.9,0.4-4.7-1.5-6.9c-3.1-3.4-6-7-8.6-10.8
	c-0.9-1.3-0.6-3.4-0.9-5.2c2.4-0.2,5.2-1.4,7.1-0.5c3.9,1.9,7.2,4.8,11.2,7.7c1.5-2.3,2.8-4.6,4.3-6.7c2.2-3.3,4.3-6.7,6.7-9.8
	c1.1-1.5,2.8-2.8,4.6-3.4c1.6-0.5,4.3-0.6,5.2,0.4c0.9,0.9,0.5,3.6-0.2,5.2c-2.7,6.5-5.9,12.8-8.5,19.3c-0.5,1.2,0.4,3.5,1.4,4.5
	c5.7,5.7,12,10.7,17.3,16.7c2.6,3,4.3,7.3,2.2,11.8c-1.2,2.6-3,3.8-5.4,2.4c-4.9-2.7-9.8-5.5-14.2-8.9c-2.8-2.1-4.7-5.4-7.4-8.7
	c-6.7,12.2-12.6,22.8-18.4,33.5C685.2,76.5,684.3,76.3,683.3,76.1z'
      />
      <path
        d='M600.9,177.5c2.8-4.2,5.3-8.3,8.3-12.1c1.5-1.9,3.7-3.5,5.9-4.6c0.9-0.4,2.8,0.6,3.9,1.4c0.4,0.3-0.3,2.2-0.8,3.3
	c-2.4,5.3-5.1,10.6-7.2,16c-0.3,0.8,1.5,2.9,2.8,3.7c6.6,4,13.2,8,16.9,15.3c0.8,1.6,2.1,3.3,2,4.9c-0.3,3.2-0.7,6.8-2.5,9.1
	c-0.9,1.2-5.5,0.8-7.5-0.3c-6.4-3.6-12.4-7.9-18.4-11.8c-3.8,7.3-7.7,15.3-12,22.9c-1.2,2.1-3.7,3.5-5.7,5.3c-0.5-2.7-1.8-5.5-1.3-8
	c2.1-9.5,4.8-18.8,7.1-28.2c0.3-1.1-0.2-3-1-3.8c-3.5-3.6-7.3-6.9-11-10.3c-0.3-0.3-0.7-0.5-0.8-0.8c-0.9-2.6-1.8-5.3-2.7-7.9
	c3-0.4,6.3-1.9,8.9-1.1C591,172.1,595.8,175,600.9,177.5z'
      />
      <path
        d='M531.8,301.5c-2.5,4.1-5.4,9-9.2,15.4c-1.4-3.3-2.8-5.2-2.8-7.1c0-4.7,0.5-9.4,1.3-14.1c0.5-2.9-0.1-4.8-2.1-7.1
	c-4.7-5.4-9.1-11.1-13.2-17c-1.2-1.8-0.8-4.7-1.2-7.1c3.1-0.4,6.8-2.1,9.3-1c4.5,2,8.2,5.6,12.3,8.5c0.6,0.4,1.3,0.8,2.3,1.5
	c2.9-5,5.6-9.9,8.5-14.6c2-3.2,4.1-6.8,7-9.1c1.8-1.5,5.3-0.9,8-1.2c-0.5,2.4-0.7,4.9-1.5,7.1c-3.1,8.3-6.5,16.4-9.6,24.7
	c-0.2,0.5,0.7,1.7,1.3,2.3c5.1,5.4,10.5,10.5,15,16.3c1.2,1.6,0.5,5.6-0.7,7.8c-0.8,1.5-4.4,2.7-6.2,2.1
	C544.2,307,538.4,304.2,531.8,301.5z'
      />
      <path
        d='M297.4,176.5c-8.5,10.8-16.5,21.2-24.7,31.5c-0.8,1-2.4,1.4-3.6,2.1c-0.8-1.7-2.6-3.9-2.1-5.1c3.7-9,7.8-17.8,12.1-26.5
	c1.8-3.8,4.6-7.1,6.5-10.9c0.6-1.1,0.3-3.3-0.4-4.4c-3.1-4.5-6.8-8.7-9.8-13.3c-0.8-1.3-0.3-3.5-0.4-5.2c2.3-0.1,5.1-1.1,6.7-0.2
	c4.1,2.3,7.6,5.6,11.4,8.5c0.6,0.4,1.3,0.7,2.2,1.1c3.6-5,7-10,10.7-14.7c1.8-2.3,4.2-4.1,6.5-5.9c0.7-0.6,2.1-0.3,3.2-0.4
	c0.1,1.2,0.6,2.6,0.1,3.6c-3.3,7.1-6.8,14.1-10.3,21c-1.2,2.3-1.2,3.7,1.2,5.3c8.1,5.5,13.7,13.1,16.6,22.5c0.6,2.1,0.5,5.4-0.8,6.6
	c-1.2,1.1-4.9,0.8-6.5-0.2c-5.1-3.4-9.9-7.3-14.6-11.2C299.6,179.5,298.4,177.6,297.4,176.5z'
      />
      <path
        d='M447.6,308.1c-5.4-4.3-10.6-8.3-15.7-12.4c-0.8-0.6-1.8-1.2-2.2-2.1c-0.9-2.1-1.4-4.3-2.1-6.5c2.5-0.4,5.4-1.7,7.6-1
	c4.9,1.7,9.6,4.4,14.3,6.6c1.6,0.7,3.2,1.4,5.2,2.2c3.5-7,6.8-13.6,10.2-20.2c1.1-2,2.3-4.1,4-5.5c1.1-0.9,3.3-0.6,4.9-0.9
	c0.1,1.5,0.6,3,0.2,4.4c-2.5,8.1-5.1,16.1-7.9,24.1c-0.9,2.6-0.5,4,2.1,5.1c8,3.5,14.1,9.4,18.5,16.8c1,1.6,0.4,4.7-0.4,6.7
	c-0.5,1.3-3.3,2.8-4.5,2.4c-5.6-1.9-11-4.3-16.4-6.9c-2.3-1.1-4.1-2.9-6.3-4.4c-4.6,8.2-9,16.2-13.5,24c-0.8,1.3-2.2,2.2-3.3,3.3
	c-1-1.6-3.2-3.5-2.9-4.9c1.6-8.3,3.7-16.4,5.7-24.6C445.8,312.3,446.8,310.3,447.6,308.1z'
      />
      <path
        d='M144,267.8c-4.8,10.9-10.1,23-15.5,35.3c-4.4-2-5-5.4-4.3-8.6c3-13.3,6.4-26.5,9.5-39.8c0.5-2.1,0.4-4.8-0.5-6.7
	c-3.1-6.2-6.9-12-10-18.2c-0.8-1.6-0.1-3.8-0.2-5.8c2,0.5,4.6,0.5,5.9,1.7c3.8,3.7,7.1,8,11.2,12.7c2-5.4,3.8-10.3,5.7-15.1
	c1-2.6,1.8-5.6,3.5-7.6c1.3-1.5,4.1-1.7,6.3-2.5c0.3,1.7,1,3.5,0.7,5.1c-1.9,9.4-4.2,18.7-6.1,28.1c-0.3,1.7,0.5,4.2,1.6,5.6
	c4.5,5.9,9.6,11.5,14.1,17.5c2.7,3.6,1.1,7.7-1.9,9.9c-1.5,1.1-5.7,0.1-7.7-1.3C151.8,275.1,147.9,271.2,144,267.8z'
      />
      <path
        d='M620.2,349c-4.4,11.5-8.5,22.8-12.9,33.9c-0.6,1.4-2.4,2.4-3.6,3.6c-1-1.5-2.9-2.9-2.9-4.4c-0.2-6.9-0.4-13.8,0.5-20.6
	c0.9-6.7,3.3-13.1,4.6-19.7c0.3-1.5-0.6-4-1.8-4.9c-4.1-3.3-8.8-5.8-12.8-9.2c-1.7-1.5-2.2-4.4-3.3-6.7c2.5-0.6,5.1-2.2,7.3-1.7
	c5.3,1.3,10.3,3.6,15.9,5.7c1.4-3.7,2.7-7.4,4.4-10.9c0.9-1.9,2.2-3.9,3.9-5c1.2-0.8,3.5-0.7,4.9,0c0.6,0.3,0.5,2.9,0.2,4.4
	c-0.9,5.3-2.1,10.5-2.9,15.8c-0.1,0.8,1.5,2.1,2.6,2.8c4.7,2.9,9.6,5.4,14.1,8.6c5.3,3.7,5.4,13.6-0.1,16.6c-2,1.1-6,0.2-8.5-1.1
	C626,354,622.8,350.9,620.2,349z'
      />
      <path
        d='M266.9,287.7c-4.9,6.7-9.4,13-14.2,19.2c-2.5,3.3-5.3,6.3-8.2,9.2c-1,1-3.3,2.3-3.6,2c-1.4-1.3-2.8-3.1-3.1-4.9
	c-0.3-1.6,0.3-3.6,1.1-5.1c5-9.2,9.8-18.6,15.3-27.5c1.8-3,1.7-4.5-0.6-6.9c-1.8-1.8-3.4-4-4.3-6.3c-0.7-1.6-0.7-4.9,0.1-5.4
	c1.5-0.9,4.1-0.8,6-0.2c2,0.6,3.8,2.2,5.4,3.6c2.9,2.5,4.7,1.5,7-1c3.5-3.9,7.2-7.7,11.2-11c2.2-1.7,5.4-2.2,8.1-3.3
	c0.5,0.5,1,1,1.4,1.5c-0.7,1.6-1.2,3.5-2.2,4.9c-3.9,5.7-8,11.2-11.6,16.2c5.8,5.5,11.3,10.3,16.2,15.6c2.2,2.4,3.8,5.5,5,8.6
	c0.6,1.6,0.6,4.5-0.4,5.6c-1,1.1-4.1,1.6-5.4,0.9c-5.9-3.1-11.5-6.5-17.1-10.1C270.9,291.8,269.1,289.7,266.9,287.7z'
      />
      <path
        d='M372.7,316.6c4-7.9,7.6-15.4,11.5-22.7c0.8-1.6,2.3-3.2,3.9-4c1.1-0.6,3.4-0.5,4.3,0.3c0.8,0.7,1,2.9,0.7,4.1
	c-2.4,8.9-4.8,17.8-7.6,26.6c-0.8,2.5-0.7,3.9,1.7,5.4c3.7,2.2,7.2,4.9,10.8,7.3c5.5,3.7,6.4,10.7,1.5,15.2
	c-3.4,3.1-7.2,1.3-10.3-0.7c-3.5-2.2-6.7-5-10.4-7.8c-2.1,4.7-4.1,9-6,13.3c-0.9,1.9-1.6,3.8-2.6,5.5c-1.7,2.9-3.6,2.3-5.5,0.1
	c-3.8-4.5-2.8-10-2.5-15.2c0.2-3,0.9-6.2,2.2-8.9c2.4-4.8,1.7-8.2-2.7-11.3c-3.6-2.5-7-5.3-10.1-8.3c-1.5-1.5-2.2-3.8-3.3-5.7
	c1.9-0.6,4.2-2.1,5.8-1.6c5.3,1.8,10.3,4.3,15.4,6.6C370.4,315.2,371.3,315.8,372.7,316.6z'
      />
      <path
        d='M506.9,130.6c1.9-4.1,3.6-8.6,6-12.6c1.6-2.6,4.3-4.6,6.7-6.5c0.6-0.5,2.5-0.1,3,0.5c0.6,0.6,0.5,2.2,0.2,3.1
	c-1.9,6.4-4,12.6-5.7,19c-0.3,0.9,0.7,2.9,1.6,3.4c5.3,2.6,10.6,5.2,16,7.2c6.6,2.5,8,5.1,5.4,11.7c-4.3,10.8-6.7,11.6-16.5,4.8
	c-3.5-2.4-6.9-4.9-10.6-7.5c-2.6,6.1-4.8,12.2-7.7,18c-1.1,2.3-3.5,4-5.3,6c-0.9-2.7-2.8-5.5-2.6-8.1c0.6-7.4,1.8-14.7,3.3-22
	c0.5-2.6,0.3-3.9-1.9-5.4c-5-3.6-9.9-7.3-14.5-11.4c-1.5-1.3-1.9-3.9-2.9-5.8c2.3-0.8,5-2.7,6.8-2.1
	C494.5,125,500.4,127.9,506.9,130.6z'
      />
      <path
        d='M23.9,369.4c2.7-5.7,5.1-11.4,8.1-16.7c1-1.9,3.4-3.2,5.3-4.3c0.6-0.4,2.7,0.5,3.1,1.3c0.5,1,0.2,2.6-0.1,3.8
	c-2.4,7.9-5,15.7-7.4,23.6c-0.2,0.6,0.6,1.7,1.2,2.2c4.1,3.8,8.2,7.7,12.6,11.1c4.9,3.8,6.6,7.9,4.5,13.5c-1.4,3.7-4,5.4-7.5,3.6
	c-4.2-2.3-8-5.2-11.8-8.2c-1.8-1.4-3-3.4-4.5-5.1c-4.3,7.9-8.4,15.8-12.8,23.4c-0.9,1.6-3,2.6-4.5,3.8c-0.8-2.4-2.6-5-2.1-7
	c2.6-10,5.8-19.9,8.6-29.9c0.4-1.4,0.1-3.5-0.8-4.6c-4.2-5-8.9-9.6-13-14.7c-1.6-2-2-4.8-3-7.3c2.9,0.1,6.3-0.7,8.5,0.5
	C13.8,361.4,18.5,365.4,23.9,369.4z'
      />
      <path
        d='M742.2,274.3c-3.5,7.4-6.8,14.6-10.4,21.7c-0.9,1.7-3,2.7-4.5,4c-1.2-2.1-3.6-4.3-3.4-6.2c0.8-9,2.4-17.9,3.5-26.9
	c0.2-1.6-0.3-3.9-1.4-5c-4-4.4-8.3-8.4-12.4-12.6c-1-1.1-1.8-2.5-2.4-3.9c-1.5-3.1-0.4-5.3,3-5.1c3,0.2,6.2,1.2,9,2.5
	c3.9,1.8,7.5,4.3,11.4,6.6c2.3-3.8,4.1-7.5,6.6-10.7c1.2-1.6,3.6-2.8,5.7-3.1c4-0.6,5.1,1.1,3.8,5c-0.4,1.1-0.8,2.2-1.2,3.2
	c-3.8,10.8-3.6,10.5,5.6,17.2c2.9,2.1,5.2,6,5.9,9.5c0.5,2.7-1,7.5-3.1,8.6c-2.4,1.3-6.5-0.1-9.7-1
	C745.9,277.3,744,275.5,742.2,274.3z'
      />
      <path
        d='M168.8,326.9c5-7.5,9.7-14.6,14.5-21.5c1.1-1.6,2.9-3,4.6-3.9c1.1-0.5,2.7,0,4.1,0.1c-0.1,1.3,0.1,2.8-0.4,3.9
	c-3.6,8-7.2,15.9-11,23.8c-1.5,3.2-1.3,5,1.8,7.2c5.5,4,10.4,8.7,15.6,13c3.8,3.2,2.3,6.8,0.5,10.1c-1.9,3.5-5.5,3-8.1,1.5
	c-4.7-2.8-9.1-6.2-13.4-9.5c-1.3-1-2.1-2.6-3.2-4.2c-6.2,10.2-11.9,19.4-17.6,28.7c-4.7-2.3-4.9-5.8-3.8-9.2
	c2.8-8.6,5.7-17.2,9-25.7c1.1-2.7,1-4.3-1.1-6.3c-3-3-5.7-6.2-8.2-9.7c-0.9-1.2-0.7-3.2-1-4.8c2.1-0.3,4.7-1.4,6.3-0.6
	C161.4,321.6,165,324.4,168.8,326.9z'
      />
      <path
        d='M175.8,229.4c-0.1-2.5-0.8-5.2-0.2-7.6c2.8-9.9,6.1-19.6,8.9-29.4c0.5-1.7,0.2-4.3-0.9-5.7c-3.7-4.7-8.2-8.9-11.9-13.6
	c-1.3-1.7-1.5-4.2-2.3-6.4c2.6-0.2,5.8-1.4,7.7-0.4c4.9,2.6,9.3,6.2,14.2,9.5c6.5-9.5,9.6-21.4,18.9-28.9c0.5,0.2,1.1,0.5,1.6,0.7
	c-0.4,1.7-0.5,3.6-1.1,5.2c-3.2,8.2-6.4,16.5-10,24.5c-1.7,3.8-0.6,5.7,2.4,8.4c5.8,5.2,10.9,11.1,16.2,16.8c1,1.1,2,2.7,2,4.1
	c0,2.9-0.3,6-1.5,8.6c-0.3,0.7-5,0.3-6.7-0.9c-5.7-4.1-10.9-8.8-16.2-13.4c-1.1-1-2-2.2-3.4-3.8c-5.3,11.1-10.5,21.7-15.6,32.4
	C177.2,229.5,176.5,229.4,175.8,229.4z'
      />
      <path d='M177.5,224.8c-0.2,1.4-0.4,2.8-0.6,4.2' />
      <path d='M684.3,13.5c0.1,0.8,0.1,1.5,0.2,2.3' />
      <path d='M124,226.2c0.4,0.2,0.8,0.4,1.2,0.6' />
    </Icon>
  )
}
export default GroupX