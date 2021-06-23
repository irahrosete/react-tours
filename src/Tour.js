import React, { useState } from 'react'

const Tour = ({ id, image, name, price, info, removeTour }) => {
  const [readMore, setReadMore] = useState(true)

  return (
    <div>
      <div key={id} className='container'>
        <img src={image} alt={name} className='img' />
        <div className='tour-detail'>
          <h3>{name}</h3>
          <p className='price'>$ {price}</p>
        </div>
        <p className='description'>
          {readMore ? `${info.substring(0, 200)}... ` : info}
          <button className='read-btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Read More' : 'See Less'}
          </button>
        </p>
        <div className='center-button'>
          <button className='not-btn' onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tour
