import React, { useEffect, useState } from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';

const Slideshow = (props) => {
 

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4
  }

  const [Height, setHeight]= useState('250px')

  const adjustHeight=()=>{
    if(window.innerWidth <= 767){
      setHeight('220px')
    }else if(window.innerWidth <= 512){
      setHeight('200px')
    }else if(window.innerWidth <= 425){
      setHeight('180px')
    }else if(window.innerWidth <= 365){
      setHeight('100px')
    }
  }
  useEffect(()=>{
    adjustHeight()
  },[])
  window.addEventListener('resize', adjustHeight)
  return (
    <div>
      <Zoom {...zoomOutProperties}>
        {props.images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%", height:Height} } src={each} alt='' />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;