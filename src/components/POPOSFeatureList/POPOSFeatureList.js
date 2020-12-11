import React from 'react'
import POPOSFeature from '../POPOSFeature/POPOSFeature.js'
import './POPOSFeaturesList.css'



function POPOSFeatureList(props) {
    const icons = props.features.map((feature) => {
    return <POPOSFeature key={feature} name={feature} />
  })
    return <div className="POPOSFeatureList">{icons}</div>
}

export default POPOSFeatureList