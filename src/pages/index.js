import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import MainProblems from '../components/mainProblems'


import ExportAreas from '../components/exportAreas'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <Hero/>
    <MainProblems/>   
    <Footer/>
  </Layout>
)

export default IndexPage
//    <h1>Do you want to know how to export? Ask the experts!</h1>
