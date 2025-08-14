import React from 'react'
import Hero from '../components/Hero'
import HomeSale from './HomeSale'
import HomeRental from './HomeRental'
import Home3 from "./Home3"
import Testimonials from './Testimonials'
const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeSale/>
      <HomeRental/>
      <Home3/>
      <Testimonials/>
    </div>
  )
}

export default Home
