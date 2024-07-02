import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Test from './testimonial/Test'
import Header from '../common/heading/Header'
import Faq from '../pricing/Faq'
import Hblog from './Hblog'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <Faq />
      <Hblog />
      <Footer />
    </>
  )
}

export default Home
