import React from 'react'
import Navbar from './coomponents/Navbar/Navbar'
import Hero from './coomponents/Hero/Hero'
import Banner from './coomponents/Banner/Banner'
import OurMenu from './coomponents/OurMenu/OurMenu'
import Newsletter from './coomponents/Newsletter/Newsletter'
import Footer from './coomponents/Footer/Footer'
import AOS, { refresh } from "aos"
import "aos/dist/aos.css"

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration:700,
      delay:100,
      easing: "ease-in",
    })
    AOS.refresh()
  })

  return (
   <main className='overflow-x-hidden scroll-smooth'>
    <Navbar/>
    <Hero/>
    <Banner/>
    <OurMenu/>
    <Newsletter/>
    <Footer/>

   </main>
  )
}

export default App
