// src/POPOSList.js

import React from 'react';
import POPOSSpace from './POPOSSpace.js';
import './POPOSList.css';
import data from './sfpopos-data.json';

function POPOSList() {
    const spaces = data.map(( { title, address, images, hours } ) => {
        return (
            <POPOSSpace
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
            { spaces }
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