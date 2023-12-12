import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"



const SolialLinks = () => {
    const links = [
        {
            id: 1,
            child: (<>Linkedin <FaLinkedin size={30} /></>),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (<>Github <FaGithub size={30} /></>),
            href: 'https://github.com/moeinDeveloper92'
        },
        {
            id: 3,
            child: (<>Email <HiOutlineMail size={30} /></>),
            // It opens uo user's email
            href: 'mailto:moeinsamani1992@gmail.com'
        },
        {
            id: 4,
            child: (<>Resume <BsFillPersonLinesFill size={30} /></>),
            href: '/Fullstack-CV-Moein.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]


    return (
        <div className='xl:flex flex-col top-[35%] left-0 fixed hidden '>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li className={`flex justify-between items-center h-14 w-40 bg-gray-500 text-white ml-[-110px] hover:rounded-md hover:ml-[-5px] duration-200 ${style}`}>
                        <a
                            href={href}
                            target='__blank'
                            className='flex w-full justify-between items-center px-2'
                            download={download}
                            rel='noreferrer'
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default SolialLinks