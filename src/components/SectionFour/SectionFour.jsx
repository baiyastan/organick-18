import React from 'react'
import  Gallery from '../../assets/svg/Gallery.svg'
import  Person from '../../assets/svg/Person.svg'
import './SectionFour.css'


function SectionFour() {
  return (
    <div className='container'>

      <div className="child">

        <div className="happy">
            <h1>Happy Customers Says</h1>
            <img src={Gallery} alt="" />
        </div>

        <div className="person">

            <div className="lyod">

                <div className="img-per">
                <img src={Person} alt="" />
                </div>

                <div className="parag-p">
                <p>But I must explain to you how all this mistaken idea of denouncing<br />
                pleasure and praising pain was born and I will give you a complete <br />
                account of the system, and expound the actual teachings of the great <br />
                explorer of the truth, the master-builder of human happiness. No one <br />
                rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                </div>
            </div>

            <div className="lyod">

                <div className="img-per">
                <img src={Person} alt="" />
                </div>

                <div className="parag-p">    
                <p>But I must explain to you how all this mistaken idea of denouncing<br />
                pleasure and praising pain was born and I will give you a complete <br />
                account of the system, and expound the actual teachings of the great <br />
                explorer of the truth, the master-builder of human happiness. No one <br />
                rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default SectionFour
