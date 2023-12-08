import React from 'react'
import HeroImage from "../assets/Moein.jpg"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
        <div name="home" className='py-[150px] h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full px-10 md:flex-row '>
                <div className='flex flex-col justify-center space-y-5'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Full Stack Developer</h2>
                    <p className='text-gray-500'>
                        I have 4 Years of Experience building and designing
                        software.
                        Currently, I love to work on web application using technologies like React,
                        Tailwind, NextJS and GraphQL.
                    </p>

                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-100 to-blue-500 cursor-pointer anim'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-2' />
                            </span>
                        </button>
                    </div>
                </div>

                <div className='mx-auto w-2/3 mt-20'>
                    <img src={HeroImage} alt="My Profile" className='rounded-2xl mx-auto md:w-full' />
                </div>
            </div>

        </div>
    )
}

export default Home