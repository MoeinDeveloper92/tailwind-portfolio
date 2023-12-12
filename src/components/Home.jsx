import React from 'react'
import hero from "../assets/hero.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto h-full flex flex-col-reverse 
            items-center justify-center px-4 md:flex-row '>
                <div className='flex flex-col justify-center  mt-10'>
                    <h2 className='text-4xl sm:text-7xl text-white'>I'm a Full Stack web developer.</h2>
                    <p className='text-gray-500 py-4 max-w-xl'>
                        I am a Full Stack Developer with expertise in Next Js, React Js, React Native, Node.js/Express.js, and more.
                        With over a couple of years of experience in web and mobile application development, I specialize in creating innovative and user-friendly applications.
                        I have a strong background in front-end development, utilizing tools like Theme UI, AntD, and Material UI Design to build responsive and intuitive user interfaces.
                        On the back-end, I have experience building REST APIs using Node.js/Express.js and working with databases using Mongoose.
                        I am dedicated to delivering scalable and maintainable code, staying up-to-date with the latest industry trends, and continuously expanding my skill set.
                    </p>
                    <div>
                        <button className='group text-white w-fit px-5 py-2 my-3 flex  items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-150'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </button>
                    </div>
                </div>

                <div className='grow-0 mt-5 '>
                    <img width={300} src={hero} alt="my profile" className='rounded-2xl mx-auto  sm:2-full w-1/3 md:w-2/3 ' />
                </div>
            </div>
        </div >
    )
}

export default Home