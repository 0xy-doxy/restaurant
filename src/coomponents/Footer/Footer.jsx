import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from "../../assets/logo.png"

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    }, 
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#blog"
    },
];

const Footer = () => {
  return (
    <>
      <div className='bg-black text-yellow-200 pt-20'>
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
            {/* company details  */}
            <div className='py-8 px-4'>
            <img src={logo} alt="" className='w-44' />
            <div className='space-y-5'>
                <p className='pt-4 opacity-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sint.</p>
                <div>
                    <button className='primary-btn'>
                        <a href="https://www.youtube.com/">Visit Our Youtube Channel</a>
                        </button>
                </div>
            </div>
            </div>
            {/* footer links  */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-semibold sm:text-left mb-5'>Important Links</h1>
                    <ul className='space-y-5'>
                        {
                         FooterLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.link}>{link.title}</a>
                            </li>
                         ))
                        }
                    </ul>

                </div>
                {/* second col links  */}

                <div className='py-8 px-4'>
                    <h1 className='text-xl font-semibold sm:text-left mb-5'>Quick Links</h1>
                    <ul className='space-y-5'>
                        {
                         FooterLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.link}>{link.title}</a>
                            </li>
                         ))
                        }
                    </ul>
                </div>
                {/* company add section  */}
                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                            <h1 className='text-xl font-semibold sm:text-left mb-5'>Address</h1>
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="https://www.instagram.com">
                                    <FaInstagram className='text-3xl hover:text-white duration-300'/>
                                </a>
                                <a href="https://www.facebook.com">
                                    <FaFacebook className='text-3xl hover:text-white duration-300'/>
                                </a>
                                <a href="https://www.linkedin.com/feed/">
                                    <FaLinkedin className='text-3xl hover:text-white duration-300'/>
                                </a>
                            </div>
                        </div>

            </div>

        </div>
        {/* copyright section  */}
        <div className='bg-yellow-200 text-black font-semibold'>
            <div className='text-xs md:text-sm container p-4 flex justify-between'>
                <p>@2024 All rights reserved Inc.</p>
                <div className='flex justify-center items-center gap-3'>
                    <a href="#">Privacy</a>
                    <a href="#">Accessibility</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
