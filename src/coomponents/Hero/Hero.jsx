import React from 'react'
import hero from "../../assets/hero.jpeg"

const Hero = () => {
  return (
    <>
      <div className=' flex justify-center items-center min-h-[550px] sm:min-h-[600px] bg-black '>
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* text content section  */}
            <div  className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
                <h1 data-aos="zoom-out" data-aos-delay="200" className='text-8xl lg:text-[9rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to bg-yellow-100 font-cursive'>Chicken
                <span className='text-3xl font-sans text-yellow-200 pl-5'>Salad</span>
                </h1>
                <p data-aos="fade" data-aos-delay="300" className='test-sm text-yellow-200 font-sans'>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aliquid aliquam esse soluta velit animi nihil obcaecati ducimus repellat amet!
                    </p>
                    <div data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">
                    <button className='primary-btn'>
                View our menu
            </button>
                    </div>
            </div>
    
            {/* hero image section  */}
            <div  data-aos="zoom-in" data-aos-duration="500" className=' min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
                <img src={hero} className='max-w-[450px] w-80 mx-auto sm:scale-125 shadow-1 ' />
                <div className='bg-gradient-to-b from-yellow-300 to bg-yellow-100 font-semibold p-3 rounded-xl absolute top-10 left-8 hidden md:block text-dark'>
                    <h1>Fresh food</h1>
                </div>
            </div>
         </div>
         </div>
      </div>
    </>
  )
}

export default Hero
