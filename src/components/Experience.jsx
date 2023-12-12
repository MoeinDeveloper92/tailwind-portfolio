import React from 'react'
import aws from "../assets/aws.png"
import css from "../assets/css.png"
import firebase from "../assets/firebase.png"
import github from "../assets/github.png"
import html from "../assets/html.png"
import JS from "../assets/javascript.png"
import mongo from "../assets/mongo.png"
import node from "../assets/node.png"
import tailwind from "../assets/tailwind.png"
import Re from "../assets/react.png"


const Experience = () => {
    const techs = [
        {
            id: 1,
            src: aws,
            title: "AWS",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: html,
            title: "HTML",
            style: "shadow-orange-300"
        },
        {
            id: 4,
            src: github,
            title: "Github",
            style: "shadow-gray-500"
        },
        {
            id: 5,
            src: firebase,
            title: "Firebase",
            style: "shadow-orange-500"
        },
        {
            id: 6,
            src: JS,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 7,
            src: mongo,
            title: "MongoDB",
            style: "shadow-green-500"
        },
        {
            id: 8,
            src: node,
            title: "NodeJS",
            style: "shadow-green-500"
        },
        {
            id: 9,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-gray-500"
        },
        {
            id: 10,
            src: Re,
            title: "React",
            style: "shadow-gray-200"
        }
    ]
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full md:h-screen text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 inline border-gray-500 py-2'>Experience</p>
                    <p className='py-6'>These are the techs I have been working with...</p>
                </div>


                <div className='w-full grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center  py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={` shadow-lg ${style} hover:scale-105 duration-300 rounded-lg py-5 cursor-pointer`}>
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