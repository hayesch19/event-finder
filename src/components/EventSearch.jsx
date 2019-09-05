import React, { useState } from 'react'
import Axios from 'axios'

const EventSearch = () => {
  const [searchTerm, setSearchTerm] = useState([])
  const [searchResults, setSearchResults] = useState({
    _embedded: { events: [] }
  })

  const fetchSearchData = async () => {
    const resp = await Axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=S1s9ya73k9LYDPewGFfpwnza4is3CrEY&keyword=${searchTerm}`
    )
    setSearchResults(resp.data)
    console.log(resp.data, 'Results')
  }
  return (
    <div className="row">
      <section className="event-search-area">
        <div>
          <input
            type="search"
            placeholder="Enter Events Here"
            className="search-box"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" onClick={fetchSearchData}>
            <i className="fas fa-search fa-flip-horizontal "></i>Search Events
          </button>
        </div>
        <div className="search-results">
          {searchResults._embedded.events.map((event, i) => {
            return (
              <p key={i}>
                {event.dates.start.localDate} | {event.name}
              </p>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default EventSearch
