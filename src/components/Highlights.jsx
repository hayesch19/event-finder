import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Highlights = () => {
  const [highlight, setHighlight] = useState({ _embedded: { events: [] } })
  const fetchData = async () => {
    const resp = await Axios.get(
      'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=S1s9ya73k9LYDPewGFfpwnza4is3CrEY&size=5'
    )
    setHighlight(resp.data)
    console.log(resp.data, 'Events')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="row">
      <section className="highlighted-events-area">
        <aside>
          <h3>
            <u>Featured Upcoming Events</u>
          </h3>
          <div>
            {highlight._embedded.events.map((event, i) => {
              return (
                <p key={i}>
                  {event.dates.start.localDate} | {event.name}
                </p>
              )
            })}
          </div>
        </aside>
      </section>
    </div>
  )
}

export default Highlights
