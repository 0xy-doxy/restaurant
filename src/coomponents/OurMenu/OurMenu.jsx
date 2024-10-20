import React from 'react'
import Slider from 'react-slick'
import Chicken from '../../assets/Chicken.png'
import Miso from '../../assets/ Miso.png'
import Biryani from '../../assets/Biryani.jpeg'
import Oyster from "../../assets/Oyster.png"

const MenuData = [
    {
        id:1,
        name: "Miso soup",
        price: "49",
        img: Miso,
    },
    {
        id:2,
        name: "Birayni",
        price: "149",
        img: Biryani,
    },
    {
        id:3,
        name: "Chicken Salad",
        price: "199",
        img: Chicken,
    },
    {
        id:4,
        name: "Oyster",
        price: "249",
        img: Oyster,
    }
]

const OurMenu = () => {

    const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint:10000,
            settings:{
                slidesToScroll:1,
                slidesToShow: 3,
                infinite: true
            },

        },
        {
            breakpoint:1024,
            settings:{
                slidesToScroll:1,
                slidesToShow: 2,
                initialSlide:2
            },

        },
        {
            breakpoint:640,
            settings:{
                slidesToScroll:1,
                slidesToShow: 1,
                
            },

        },
    ],

    }
  return (
    <div className='py-16 bg-black text-yellow-200'>
      <div className="container">
        {/* header section  */}
        <div className='mb-0 space-y-5'>
            <h1 data-aos="fade-up" className='text-center font-bold text-3xl'>Our Menu</h1>
            <div data-aos="fade-up" data-aos-delay="200" className='text-center sm:max-w-sm mx-auto text-s opacity-75'>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati numquam quae excepturi officia aperiam enim, praesentium facere blanditiis rem autem.
            </div>
        </div>

        {/* slider section  */}
        <div data-aos="zoom-in" >
            <Slider {...settings}>
                {
                    MenuData.map((menu) => (
                        <div className='my-16'>
                            <div className='flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl'>
                                {/* img section  */}
                                <div className='mb-3 flex justify-center'>
                                <img src={menu.img} alt="" className='rounded-full w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1' />
                                </div>
                                

                                {/* text content  */}
                                <div className='flex flex-col items-center gap-4'>
                                    <div className='text-center space-y-3'>
                                        <h1 className='text-xl'>{menu.name}</h1>
                                        <p className='text-3xl font-semibold'>
                                            <span className='text-2xl font-sans'>Only
                                            </span>${" "}
                                            {menu.price}.00
                                           
                                            </p>
                                            <button className='primary-btn2'>
                                            <a href="#" >Buy Now</a>
                                            </button>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>

      </div>
    </div>
  )
}

export default OurMenu
