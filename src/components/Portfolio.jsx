import React from 'react'
import pic1 from "../assets/projects/workImg.jpeg"
import pic2 from "../assets/projects/realestate.jpg"
import pic3 from "../assets/projects/workImg.jpeg"
import pic4 from "../assets/projects/realestate.jpg"
import pic5 from "../assets/projects/workImg.jpeg"
import pic6 from "../assets/projects/realestate.jpg"


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: pic1,
        },
        {
            id: 2,
            src: pic2
        },
        {
            id: 3,
            src: pic3
        },
        {
            id: 4,
            src: pic4
        },
        {
            id: 5,
            src: pic5
        },
        {
            id: 6,
            src: pic6
        }
    ]
    return (
        <div name="portfolio" className='
        bg-gradient-to-b from-black to-gray-800 w-full 
        text-white md:h-screen
        '>  <hr className='' />
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 inline border-gray-700'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here.</p>
                </div>

                {/* Card */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-300 hover:scale-105 object-cover' />
                            <div className='flex justify-center items-center'>
                                <button className='w-1/2 py-2 px-6 m-4 duration-200 hover:scale-105   '>Demo</button>
                                <button className='w-1/2 py-2 px-6 m-4 duration-200 hover:scale-105    '>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio