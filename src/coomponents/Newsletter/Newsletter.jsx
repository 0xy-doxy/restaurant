import React from 'react';
import beverage from "../../assets/beverage.png"


const backgroundStyle = {
    backgroundImage: `url(${beverage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "right 100px top 20px",
    height: "100%",
    width: "100%",
   

}

const Newsletter = () => {

  return  <>
    
      <div className='bg-black text-yellow-200 ' style={backgroundStyle} >
        <div className='container bg-black/60 sm:bg-transparent py-16'>
           <div className='grid grid-cols-1 lg:grid-cols-1 items-center gap-8'>
               <div className='space-y-4 text-center sm:text-left'>
                {/* text section  */}
                <h1 data-aos="fade-up" className='text-2xl sm:text-3xl font-semibold text-yellow-200'>ready to get started</h1>
                <p data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, similique.</p>
               </div>
               {/* input section  */}
                    <div data-aos="fade-up" data-aos-delay="400" className='text-center sm:text-left'>
                        <input type="text"  placeholder='Enter your Email'  className='max-w-[400px] px-4 py-2 rounded-l-md ring-0 focus:outline-none text-yellow-100 bg-black border-2 border-yellow-200' />
                        <button className='bg-yellow-200 text-dark border-2 border-yellow-200 px-4 py-2 rounded-r-md'>
                            {" "}
                            <span className='text-sm uppercase font-semibold'>Get started</span>{" "}
                        </button>
                    </div>

            </div>
        </div>
      </div>
    </>
  
}

export default Newsletter
