// src/POPOSList.js

import React, { useState } from 'react'
import POPOSSpace from '../POPOSSpace/POPOSSpace.js';
import './POPOSList.css';
import data from '../../sfpopos-data.json';

function POPOSList() {
  const [ query, setQuery ] = useState('')
  // const spaces = data.filter(obj => obj.title.includes(query) || obj.address.includes(query)).map((obj, i) => {
  // const spaces = data.map(( { title, address, images, hours }, i ) => {
    const spaces = data.filter((obj) => {
      // true if query is in title
      const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
      // true if query is in address
      const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
      // return true if either is true
      return inTitle || inAddress
  }).map((obj) => { // remove i here
    // Add id here! 
    const { id, title, address, images, hours, features } = obj
return (
            <POPOSSpace
                id={id}
                key={title} // The title could be a key
                name={title}
                address={address}
                image={images[0]}
                hours = {hours}
            />
        )
    })
    return (
      <div className="POPOSList">
        <form>
            <input 
                value={query}
                placeholder="search"
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
        {spaces}
      </div>
    )
}


      {/* { titles } */}
      {/* <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
      <POPOSSpace
        name="100 Pine Street"
        address="100 Pine St."
        image="100-pine.jpg"
      />
      <POPOSSpace
        name="101 California Street"
        address="101 California"
        image="101-california.jpg"
      />
      <POPOSSpace
        name="343 Sansome Roof Garden"
        address="343 Sansome St."
        image="343-sansome-roof-garden.jpg"
      />
      <POPOSSpace
        name="525 Market Street Plaza"
        address="525 Market St."
        image="525-market-street-plaza.jpg"
      />
      <POPOSSpace
        name="Citigroup Center"
        address="1 Sansome St."
        image="citigroup-center.jpg"
      /> */}
    
// const titles = data.map((obj) => {
//      return <h1>{obj.title}</h1>
// })

//  const titles = data.map((obj) => {
//      return obj.title
//    })
  
//    console.log(titles)

export default POPOSList