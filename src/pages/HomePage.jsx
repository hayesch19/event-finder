import React from 'react'
import Header from '../components/Header'
import EventSearch from '../components/EventSearch'
import Highlights from '../components/Highlights'

const HomePage = () => {
  return (
    <main>
      <Header />
      <EventSearch />
      <Highlights />
    </main>
  )
}

export default HomePage
