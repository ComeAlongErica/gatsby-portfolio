import React from 'react'

import AboutMe from '../components/indexComps/aboutme'
import ShortIntro from '../components/indexComps/shortIntro'
import Development from '../components/indexComps/development'
import Projects from '../components/indexComps/projects'
import Layout from '../components/layout'

export default props => {
  return (
    <Layout>
      <AboutMe />
      <ShortIntro />
      <Development />
      <Projects />
    </Layout>
  )
}
