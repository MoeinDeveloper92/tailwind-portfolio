import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"


const SolialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin
                    <FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github
                    <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/moeinDeveloper92',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                    Email
                    <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:moeinsamani1992@gmail.com',
            style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (
                <>
                    Resume
                    <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
            <ul className=''>
                {links.map(({ id, child, href, style, download }) => (
                    <li className='flex justify-between items-center w-40 h-14 px-4  ml-[-100px] bg-gray-500 hover:rounded-md duration-200 hover:ml-[-10px]'>
                        <a
                            rel='noreferer'
                            download={download}
                            key={id}
                            href={href}
                            target='__blank'
                            className={`flex justify-between items-center w-full text-white ${style}`}>
                            <>
                                {child}
                            </>
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SolialLinks