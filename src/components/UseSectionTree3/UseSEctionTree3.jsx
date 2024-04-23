import React from 'react'
import  Gal1 from '../../assets/svg/Gal1.svg'
import  Gallery from '../../assets/svg/Gallery.svg'
import  Bry1 from '../../assets/svg/Bry1.svg'
import  Flower1 from '../../assets/svg/Flower1.svg'
import  Oc1 from '../../assets/svg/Oc1.svg'

function UseSectionTree() {
  return (
    <div className='container section-three-container'>
    <div className="gallery">
        <h1>Gallery</h1>
        <img src={Gallery} alt="" />
    </div>
    <div className="condiv">

    <div className="bridge">
        <img src={Gal1} alt="" />
    </div>
    <div className="road">
        <img src={Bry1} alt="" />
        <img src={Flower1} alt="" />
        
    </div>
    <div className="conimg">
        <img src={Oc1} alt="" />
    </div>

    </div>
</div>
  )
}

export default UseSectionTree