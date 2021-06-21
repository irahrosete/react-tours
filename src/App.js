import React, { useState, useEffect } from 'react'
import './App.css'

const url = 'https://course-api.com/react-tours-project'
const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [readButton, setReadButton] = useState('Read More')
  const [text, setText] = useState()

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false)
        setTours(data)
      })
      .catch((error) => console.log(error))
  }, [])

  const removeTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const refreshTours = () => {
    console.log(tours)
  }

  const toggleReadButton = (id) => {
    console.log(id)
    readButton === 'Read More'
      ? setReadButton('Read Less')
      : setReadButton('Read More')
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <>
        <h1>Our Tours</h1>
        {tours.length < 1 ? (
          <button onClick={refreshTours}>Refresh</button>
        ) : (
          tours.map((tour) => {
            const { id, name, info, price, image } = tour
            return (
              <div key={id} className='container'>
                <img src={image} alt={name} className='img' />
                <div>
                  <h3>{name}</h3>
                  <p>$ {price}</p>
                  <p>
                    {info}
                    {/* {console.log(info.length)} */}
                    <button onClick={() => toggleReadButton(id)}>
                      {readButton}
                    </button>
                  </p>
                  <button onClick={() => removeTour(id)}>Not Interested</button>
                </div>
              </div>
            )
          })
        )}
      </>
    )
  }
}

export default App
