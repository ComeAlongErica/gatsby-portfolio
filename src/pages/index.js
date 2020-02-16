import React from 'react'

import AboutMe from '../components/aboutme'
import Layout from '../components/layout'

export default props => {
  return(
  <Layout>
    {layoutProps => <AboutMe layout={layoutProps} />}
  </Layout>
)}
