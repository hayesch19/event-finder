import React from 'react'
import Header from '../components/Header'
import EventSearch from '../components/EventSearch'
import Highlights from '../components/Highlights'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <main>
      <Header />
      <Highlights />
      <EventSearch />
      <Footer />
    </main>
  )
}

export default HomePage
