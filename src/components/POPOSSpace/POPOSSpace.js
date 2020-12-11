// src/Project.js

import React from 'react'
// import logo from '../logo.svg'
import './POPOSSpace.css';
import { Link } from 'react-router-dom'

function POPOSSpace(props) { // Add props here!
    const { name, image, address, hours, id } = props
    return (
      <div>
        <Link to={`/details/${id}`}>
        <img 
          src={`${process.env.PUBLIC_URL}images/${image}`} 
          width="300" 
          height="300" 
          alt="Hello" 
        />
        </Link>
        <Link to={`/details/${id}`}>
            <h1>{name}</h1>
        </Link>
        <div className="POPOSSpace-info">
            <div >{address}</div>
            <div>{hours}</div>
        </div>
      </div>
    )
}

export default POPOSSpace