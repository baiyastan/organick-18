import React from 'react'
import  Gal from '../../assets/svg/Gal.svg'
import  Gallery from '../../assets/svg/Gallery.svg'
import  Bry from '../../assets/svg/Bry.svg'
import  Flower from '../../assets/svg/Flower.svg'
import  Oc from '../../assets/svg/Oc.svg'

function UseSectionTree() {
  return (
    <div className='container section-three-container'>
    <div className="gallery">
        <h1>Gallery</h1>
        <img src={Gallery} alt="" />
    </div>
    <div className="condiv">

    <div className="bridge">
        <img src={Gal} alt="" />
    </div>
    <div className="road">
        <img src={Bry} alt="" />
        <img src={Flower} alt="" />
        
    </div>
    <div className="conimg">
        <img src={Oc} alt="" />
    </div>

    </div>
</div>
  )
}

export default UseSectionTree