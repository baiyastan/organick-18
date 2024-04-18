import React from 'react'
import Turkey from '../../assets/svg/Turkey.svg'
import Houses from '../../assets/svg/Houses.svg'
import Moon from '../../assets/svg/Moon.svg'
import Moun from '../../assets/svg/Moun.svg'
import Back from '../../assets/svg/Back.svg'
import Date from '../../assets/svg/Date.svg'
import  In from '../../assets/svg/In.svg'

function UsSectionOne() {
  return (
    <section >
    <div className="line"></div>
    <div className="container section-container">

    <div className="back">
        <img src={Back} alt="" />
    </div> 

  <div className="content">

    <div className="img-content">
    <div className="images">
        <img src={Turkey} alt="" />
    </div>
    <div className="img-con">
        <img src={Houses} alt="" />
        <img src={Moon} alt="" />
        <img src={Moun} alt="" />
    </div>
    </div>

    <div className="text-con">
        <div className="context">
            <h1>Cinque Terre Tour</h1>
        </div>
            <div className="text">
            <p>from</p>
            <h1>34 €</h1>
        </div>
        <div className="lorem">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>

        <div className="date">
            <h3>Select a date</h3>
            <img src={Date} alt="" />
        </div>
        <div className="input">
            <h1>Time</h1>
            <img src={In} alt="" />
        </div>
        <div className="button">
            <button>Buy Now</button>
        </div>
    </div>

  </div>
    </div>
</section>
  )
}

export default UsSectionOne
