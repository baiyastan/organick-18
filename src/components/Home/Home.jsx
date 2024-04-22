import React from 'react'
import SectionOne from '../SectionOne/SectionOne'
import SectionTwo from '../SectionTwo/SectionTwo'
import SectionThree from '../SectionThree/SectionThree'
import Footer from '../Footer/Footer'
import SectionFour from '../SectionFour/SectionFour'

function Home() {
  return (
    <div className='container'>
     
      <SectionOne/> 
       <SectionTwo/> 
      <SectionThree/>
      <SectionFour/>
    </div>
  )
}


export default Home 
