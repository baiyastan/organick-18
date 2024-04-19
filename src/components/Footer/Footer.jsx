import React from 'react'
import  Logo from '../../assets/svg/Logo.svg'
import "./Footer.css"
import  Footelogo from '../../assets/svg/Footelog.svg'
import  Phone from '../../assets/svg/Phone.svg'
import  Pochta from '../../assets/svg/Pochta.svg'
import Social1 from '../../assets/svg/Social1.svg'
import Social2 from '../../assets/svg/Social2.svg'
import Social3 from '../../assets/svg/Social3.svg'


function Footer() {
  return (
    <footer className=' '>
    <div className="footer-content container">

      <div className='logo-container container'>
        <img src={Logo} alt="" />
      </div>


      <div className='divider'></div>

      <div className='footerBody-container'>
        <div className='services'>
          <h1>Services</h1>
          <div className='serviii'>
            <p>Bike and Rickshaw rental</p>
            <p>Guided Tours of Lucca</p>
            <p>Guided Bike Tour of Lucca</p>
            <p>Trip In The Tuscan Hills</p>
            <p>Transportation With Luxury Cars</p>
            <p>Wine Tours By Bus With Guide</p>
          </div>
        </div>

        <div className='home'>
          <h1>Home</h1>
          <div className='homee'>
            <p>Home</p>
            <p>About Us</p>
            <p>Tour Packages</p>
          </div>
        </div>

        <div className='help'>
          <h1>Help</h1>
          <div className='helping'>
            <p>Tour Packages</p>
            <p>Provicy Policy</p>
          </div>
        </div>

        <div className='contact'>
          <h1>Contacts</h1>
          <div className="context">

          <div className='phone57'>
            <img src={Footelogo} alt="" />
            <p>Piazza Napoleone, Lucca, Tuscany</p>
          </div>
          <div className='phone57'>
            <img src={Phone} alt="" />
            <p>+39 346 368 5708</p>
          </div>
          <div className="phone57">
            <img src={Pochta} alt="" />
            <p>italiainlimo@gmail.com</p>
          </div>
          </div>
        </div>


        <div className='social-media'> 
          <h1>Social Media</h1>
          <div className='frame-59'>
            <div className='img-Social'>
              <img src={Social1} alt="" />
            </div>
            <div className='img-Social'>
            <img src={Social2} alt="" />
            </div>
            <div className='img-Social'>
              <img src={Social3} alt="" />
            </div>
          </div>
        </div>

      </div>

      <div className='divider'></div>
      <h3 className='footer-h3'>Copyright © 2022.  All rights reserved.</h3>
    </div>
    </footer>
  )
}

export default Footer
