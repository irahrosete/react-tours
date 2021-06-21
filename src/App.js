import React, { useState, useEffect } from 'react'
import './App.css'

const url = 'https://course-api.com/react-tours-project'
const App = () => {
  const [tours, setTours] = useState([])

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTours(data)
        // console.log(data)
      })
      .catch((error) => console.log(error))
  }, [])

  const removeTour = (id) => {
    console.log(tours)
    let newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  return (
    <>
      <h1>Our Tours</h1>
      {tours.map((tour) => {
        const { id, name, info, price, image } = tour
        return (
          <div key={id} className='container'>
            <img src={image} alt={name} className='img' />
            <div>
              <h3>{name}</h3>
              <p>{price}</p>
              <p>{info}</p>
              <button onClick={() => removeTour(id)}>Not Interested</button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default App
