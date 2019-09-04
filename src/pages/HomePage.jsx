import React from 'react'
import Header from '../components/Header'
import EventSearch from '../components/EventSearch'
import Highlights from '../components/Highlights'

const HomePage = () => {
  return (
    <main>
      <Header />
      <div className="section-left">
        <EventSearch />
      </div>
      <div className="section-right">
        <Highlights />
      </div>
    </main>
  )
}

export default HomePage
