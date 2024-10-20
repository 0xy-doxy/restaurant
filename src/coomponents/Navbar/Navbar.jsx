import React from 'react';
import {FaBars} from "react-icons/fa"
import logo from "../../assets/logo.png"

const Menu = [
    {
        id: 1,
        name: "Miso soup",
        link: "#"
    },
    {
        id: 2,
        name: "Biryani",
        link: "/#"
    },
    {
        id: 3,
        name: "Chicken Salad",
        link: "/#"
    },
    {
        id: 4,
        name: "Beverages",
        link: "/#"
    },
    {
        id: 5,
        name: "kids",
        link: "/#"
    },
   
]
const Navbar = () => {
    const [open , setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
  return (
    <>
    <div className='bg-black text-yellow-200'>
     <div className="container py-2">
        <div className='flex justify-between items-center'>
            {/* logo section */}
            <div data-aos="fade-down " data-aos-once="true">
                <a href="#">
                    <img src={logo} alt="logo" className='w-36' />
                </a>
            </div>
            {/* link section  */}
            <div data-aos="fade-down " data-aos-once="true" data-aos-delay="300" className='hidden lg:flex justify-between items-center gap-4 '>
                <ul className='hidden lg:flex justify-between items-center gap-4 '>
                    {
                        Menu.map((menu) =>(
                            <li key = {menu.id}>
                                <a href={menu.link} className='inline-block text-xl p-4 hover:scale-125 duration-200'>{menu.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* responsive menu for mobile */}
            <div className='lg:hidden' >
                <button onClick={handleOpen}>
                    <FaBars className='test-3xl'/>
                </button>
                {/* dropdown menu */}
                { open && <div>
                        <ul className='bg-yellow-200 text-black space-y-3 p-4 rounded-md shadow-md absolute right-10 top-24 z-50'>
                            {Menu.map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.link} className='inline-block text-xl p-4 hover:bg-black hover:text-white w-full rounded-md'>
                                        {menu.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                }

            </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default Navbar
