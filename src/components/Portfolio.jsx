import React from 'react'
import cSharp from "../assets/csharp (1).png"
import go from "../assets/go.png"
import node from "../assets/node (1).png"
import php from "../assets/php.png"
import python from "../assets/python.png"
import ruby from "../assets/ruby.png"

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: cSharp,
        },
        {
            id: 1,
            src: go,
        },
        {
            id: 1,
            src: node,
        },
        {
            id: 1,
            src: php,
        },
        {
            id: 1,
            src: python,
        },
        {
            id: 1,
            src: ruby,
        }
    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white w-full
        md:h-screen overflow-visible pb-10
        '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-800'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here.</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg group flex flex-col justify-between h-auto'>
                            <img width={200} src={src} alt="Csharp" className=' rounded-md duration-200 group-hover:scale-105 mx-auto object-cover' />
                            <div className='flex items-center justify-center space-x-3  px-4'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 shadow-lg shadow-gray-500 rounded-lg  text-center'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 shadow-lg shadow-gray-500 rounded-lg text-center'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio