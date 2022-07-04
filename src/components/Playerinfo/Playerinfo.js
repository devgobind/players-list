import React from 'react'
import './Playerinfo.css'
const Playerinfo = ({id, name, country}) => {  
  return (
    <div className='info'>
            <h3>Player Id: {id}</h3>
            <p>Name: {name}</p>
            <p>Country: {country}</p>
    </div>
  )
}

export default Playerinfo