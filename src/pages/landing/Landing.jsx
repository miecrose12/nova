import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Mission from '../../components/mission/Mission'
import Niches from '../../components/nich/Niches'
import Elevate from '../../components/elevate/Elevate'
import How from '../../components/how/How'
import Grow from '../../components/grow/Grow'
import Build from '../../components/build/Build'
import Tribe from '../../components/tribe/Tribe'
import Latest from '../../components/latest/Latest'

import Footer from '../../components/footer/Footer'
import Frequent from '../../components/frequent/frequent'


const Landing = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Mission/>
        <Niches/>
        <Elevate/>
        <How/>
        <Grow/>
        <Build/>
        <Tribe/>
        <Latest/>
        <Frequent/>
        <Footer/>
    </div>
  )
}

export default Landing