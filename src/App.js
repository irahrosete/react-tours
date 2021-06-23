import React, { useState, useEffect } from 'react'
import './App.css'

const url = 'https://course-api.com/react-tours-project'
const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [readMore, setReadMore] = useState(true)

  const refreshTours = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false)
        setTours(data)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    refreshTours()
  }, [])

  const removeTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <main>
        <h1>Tours</h1>
        <section>
          {tours.length < 1 ? (
            <>
              <h2>No tours left</h2>
              <div className='center-button'>
                <button onClick={refreshTours}>Refresh</button>
              </div>
            </>
          ) : (
            tours.map((tour) => {
              const { id, name, info, price, image } = tour
              return (
                <div key={id} className='container'>
                  <img src={image} alt={name} className='img' />
                  <div className='tour-detail'>
                    <h3>{name}</h3>
                    <p>$ {price}</p>
                  </div>
                  <p className='description'>
                    {readMore ? `${info.substring(0, 200)}... ` : info}
                    <button
                      className='read-btn'
                      onClick={() => setReadMore(!readMore)}
                    >
                      {readMore ? 'Read More' : 'See Less'}
                    </button>
                  </p>
                  <div className='center-button'>
                    <button className='not-btn' onClick={() => removeTour(id)}>
                      Not Interested
                    </button>
                  </div>
                </div>
              )
            })
          )}
        </section>
      </main>
    )
  }
}

export default App

// TO DO:
// apply components
// fix read more to only trigger on the tour and not on all tours
// style
