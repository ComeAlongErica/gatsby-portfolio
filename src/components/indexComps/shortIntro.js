import React from 'react'
import styled from 'styled-components'

import GroupX from '../../assets/groupX'

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

const ShortIntro = props => {
  return (
    <Container id={'about'}>
      <h2>Short Introduction</h2>
      <div>
        <p data-sal='slide-up' data-sal-delay='100' data-sal-easing='ease-in'>
          I'm a photographer/graphic designer turned developer. I aim to create
          elegant and scalable systems that serve users effectively. While I
          enjoy working on both front and back-end portions of an app, most of
          my efforts have been focused on the front-end. Truly, I just enjoy a
          interesting problem to solve.
        </p>
        <p data-sal='slide-up' data-sal-delay='100' data-sal-easing='ease-in'>
          In addition to development work, I also do photography and graphic
          design. I enjoy getting my hands into everything. If I'm creating
          something new, I am happy!
        </p>
        <p data-sal='slide-up' data-sal-delay='100' data-sal-easing='ease-in'>
          When I log off for the day, you can find me riding my bike, cooking up
          new recipes, or renovating another part of my house.
        </p>
      </div>
      <GroupX
        color={'blue'}
        height={250}
        styles={`position: absolute; bottom: -140px; left: -150px; transform: rotate(10deg); opacity: .90;`}
      />
    </Container>
  )
}
export default ShortIntro
