import React from 'react'
import str1 from '../../assets/svg/strelka1.svg'
import str2 from '../../assets/svg/strelka2.svg'
import block01 from '../../assets/svg/block01.svg'
import block02 from '../../assets/svg/block02.svg'
import blockImage from '../../assets/svg/blockImage.svg'
import './HomePageTwo.css'
function HomePageSectionTwo() {
  return (
      <section style={{marginTop:"300px"}}>
   
      <div className="content-top container">


      <h1>Explore Our Popular Destinantions </h1>

      <div className="content-top-image">
        <img src={str1} alt="" />
        <img src={str2} alt="" />    
      </div>

      </div>

      <div className="home-blocks container">
        

        <div className="home-block">

   <div className="home-block-image">
    <img src={blockImage} alt="" />
   </div>
   <div className="block-info">
    <h1>Lucca Bike Tour</h1>
    <div className="block-text">
        <p>from</p>
        <h2>34 €</h2>
    </div>
    <div className="block-content">
        <div className="block-content-1">
            <img src={block01} alt="" />
            <h2>EVERY DAY</h2>

        </div>
        <div className="block-content-1">
        <img src={block02} alt="" />
            <h2>EVERY DAY</h2>
        </div>
    </div>
    <p>A tour of the city and its surroundings led by a professional guide ...</p>
   </div>

        </div>
        <div className="home-block">

   <div className="home-block-image">
    <img src={blockImage} alt="" />
   </div>
   <div className="block-info">
    <h1>Lucca Bike Tour</h1>
    <div className="block-text">
        <p>from</p>
        <h2>34 €</h2>
    </div>
    <div className="block-content">
        <div className="block-content-1">
            <img src={block01} alt="" />
            <h2>EVERY DAY</h2>

        </div>
        <div className="block-content-1">
        <img src={block02} alt="" />
            <h2>EVERY DAY</h2>
        </div>
    </div>
    <p>A tour of the city and its surroundings led by a professional guide ...</p>
   </div>

        </div>
        <div className="home-block">

   <div className="home-block-image">
    <img src={blockImage} alt="" />
   </div>
   <div className="block-info">
    <h1>Lucca Bike Tour</h1>
    <div className="block-text">
        <p>from</p>
        <h2>34 €</h2>
    </div>
    <div className="block-content">
        <div className="block-content-1">
            <img src={block01} alt="" />
            <h2>EVERY DAY</h2>

        </div>
        <div className="block-content-1">
        <img src={block02} alt="" />
            <h2>EVERY DAY</h2>
        </div>
    </div>
    <p>A tour of the city and its surroundings led by a professional guide ...</p>
   </div>

        </div>
        <div className="home-block">

   <div className="home-block-image">
    <img src={blockImage} alt="" />
   </div>
   <div className="block-info">
    <h1>Lucca Bike Tour</h1>
    <div className="block-text">
        <p>from</p>
        <h2>34 €</h2>
    </div>
    <div className="block-content">
        <div className="block-content-1">
            <img src={block01} alt="" />
            <h2>EVERY DAY</h2>

        </div>
        <div className="block-content-1">
        <img src={block02} alt="" />
            <h2>EVERY DAY</h2>
        </div>
    </div>
    <p>A tour of the city and its surroundings led by a professional guide ...</p>
   </div>

        </div>



      </div>
    </section>
  )
}

export default HomePageSectionTwo
