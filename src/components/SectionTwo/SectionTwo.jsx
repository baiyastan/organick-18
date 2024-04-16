import React from 'react'
import './SectionTwo.css'
import  Number from '../../assets/svg/Number.svg'
import  Duartion from '../../assets/svg/Duartion.svg'
import  Areas from '../../assets/svg/Areas.svg'
import  Service from '../../assets/svg/Service.svg'
import  Language from '../../assets/svg/Language.svg'
import  Fees from '../../assets/svg/Fees.svg'
import  Trans from '../../assets/svg/Trans.svg'

function SectionTwo() {
  return (
    <div className='conatiner'>
        <div className="info">
          <h1>Details</h1>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            <br /> industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
            <br /> type and scrambled it to make a type specimen book. It has survived not only five centuries,
            <br /> but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
            <br />in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            <br /> with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="trans">

        <div className="number">
          <img src={Number} alt="" />
          <h1>Number of group:</h1>
          <p>15-30</p>
        </div>
        <div className="number">
          <img src={Duartion} alt="" />
          <h1>Duartion: </h1>
          <p>15 hours and 45 minutes</p>
        </div>
        <div className="number">
          <img src={Areas} alt="" />
          <h1>Departuring and arriving areas:  </h1>
          <p>Lucca</p>
        </div>
        <div className="number">
          <img src={Service} alt="" />
          <h1>Guide service: </h1>
          <p>Included</p>
        </div>
        <div className="number">
          <img src={Language} alt="" />
          <h1>Language: </h1>
          <p>English, Italian</p>
        </div>
        <div className="number">
          <img src={Fees} alt="" />
          <h1>Entry Fees: </h1>
          <p>lorem ipsum</p>
        </div>
        <div className="number">
          <img src={Trans} alt="" />
          <h1>EntryTransportation: </h1>
          <p>Bus</p>
        </div>
        </div>

    </div>
  )
}

export default SectionTwo 