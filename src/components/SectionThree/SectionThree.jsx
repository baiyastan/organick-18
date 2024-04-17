import React from 'react'
import './SectionThree.css'
import  Bridge from '../../assets/svg/Bridge.svg'
import  Gallery from '../../assets/svg/Gallery.svg'
import  Road from '../../assets/svg/Road.svg'
import  Flowers from '../../assets/svg/Flowers.svg'
import  Girl from '../../assets/svg/Girl.svg'


function SectionThree() {
  return (
    <div className='container'>
        <div className="gallery">
            <h1>Gallery</h1>
            <img src={Gallery} alt="" />
        </div>
        <div className="condiv">

        <div className="bridge">
            <img src={Bridge} alt="" />
        </div>
        <div className="road">
            <img src={Road} alt="" />
            <img src={Flowers} alt="" />
        </div>
        <div className="conimg">
            <img src={Girl} alt="" />
        </div>

        </div>
    </div>
  )
}
export default SectionThree 
