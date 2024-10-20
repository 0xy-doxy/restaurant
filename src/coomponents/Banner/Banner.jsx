import React from 'react'
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <>
      <div className=' min-h-[620px] flex justify-center items-center py-12 sm:py-0 bg-black'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* image section  */}
                <div data-aos="zoom-in" className='flex justify-center items-center'>
                    <img src={banner} alt=""  className='max-w-[450px] w-96 mx-auto shadow-1'/>
                </div>
                {/* test content section  */}
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <p data-aos="fade-up" className='uppercase text-3xl font-semibold text-yellow-200'>About</p>
                    <h1 data-aos="fade-up" data-aos-delay="200" className='text-5xl text-yellow-200 font-bold font-cursive2'>Fresh Salad...</h1>
                    <p data-aos="fade-up" data-aos-delay="300" className='text-sm text-yellow-200 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quas iusto aliquam maxime error nam laboriosam, aliquid possimus, provident ab perspiciatis nobis, minus quisquam quae accusamus expedita voluptatem corporis minima consequuntur voluptatum ex laborum molestias magnam quod. Consectetur officiis nostrum odio excepturi soluta! Eos assumenda nulla laboriosam fuga, ad incidunt?</p>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <button className='primary-btn'>
                            view our menu
                        </button>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Banner
