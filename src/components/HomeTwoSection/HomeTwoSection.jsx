import React from 'react'
import imageLogo from '../../assets/Images/imagelogo.png'
import searchLogo from '../../assets/Images/search.png'
import './HomeTwoSection.css'

function HomeTwoSection() {
  return (
    <section className='home-section'>
        <div className="image-position">
            <img src={imageLogo} alt="" />
            {/* <img src="" alt="" /> */}
        </div>
        <div className="pustoy"></div>

        <div className="home-content container">
            <h1>Enjoy in the best way!</h1>
            <h2>Enjoy our services for your trip anytime</h2>
            <div className="search-image">
              {/* <img src="" alt="" /> */}
                <img src={searchLogo} alt="" />
            </div>



        </div>

      
     

    </section>
  )
}

export default HomeTwoSection