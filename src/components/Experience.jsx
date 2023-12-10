import React from 'react'
import clojure from "../assets/clojure.png"
import cover from "../assets/cover.webp"
import code from "../assets/code.jpg"
import scala from "../assets/scala.png"
import php from "../assets/php.png"
import python from "../assets/python.png"
import node from "../assets/node.png"
import go from "../assets/go.png"

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: clojure,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: cover,
            title: "CSS",
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: code,
            title: "JS",
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: scala,
            title: "React",
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: php,
            title: "PHP",
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: python,
            title: "python",
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: node,
            title: "NodeJs",
            style: 'shadow-green-500'
        },
        {
            id: 8,
            src: go,
            title: "GO",
            style: 'shadow-orange-500'
        }
    ]
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the techs I work with...</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div id={id} className={`shadow-md hover:scale-105 duration-150 rounded-lg py-2 ${style}`}>
                            <img className='w-20 mx-auto' src={src} alt="" />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience