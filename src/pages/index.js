import React from 'react'

import AboutMe from '../components/indexComps/aboutme'
import ShortIntro from '../components/indexComps/shortIntro'
import Layout from '../components/layout'

export default props => {
  return (
    <Layout>
      {layoutProps => (
        <>
          <AboutMe layout={layoutProps} />
          <ShortIntro />
        </>
      )}
    </Layout>
  )
}
