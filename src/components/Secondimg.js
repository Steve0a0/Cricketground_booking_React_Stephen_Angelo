import React from 'react'
import ground from '../images/ground.jpg';
import './Secondimg.css'
const Secondimg = () => {
  function handleChange(){
    const title =["Book your favorite cricket ground hassle-free!",
    "Reserve your spot for the ultimate cricket experience!",
    "Find and book the perfect cricket pitch instantly!",
    "Secure your playtime at top-notch cricket grounds!",
    "Your next cricket match is just a click away!"];
    const int = Math.floor(Math.random()*5);
    return title[int]
  }
  return (
    <div className='headimg'>
        <img src={ground} alt="/" />
        <div className='headtext headtextcss'>
      <h1>{handleChange()}</h1>
    </div>
    </div>
    
  )
}

export default Secondimg;