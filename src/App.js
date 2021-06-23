import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import './App.css'

const url = 'https://course-api.com/react-tours-project'
const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
    return <Loading />
  } else {
    return (
      <main>
        <h1>Tours</h1>
        <div className='underline'></div>
        <section>
          {tours.length < 1 ? (
            <>
              <h2>No tours left</h2>
              <div className='center-button'>
                <button className='refresh-btn' onClick={refreshTours}>
                  Refresh
                </button>
              </div>
            </>
          ) : (
            <Tours tours={tours} removeTour={removeTour} />
          )}
        </section>
      </main>
    )
  }
}

export default App
