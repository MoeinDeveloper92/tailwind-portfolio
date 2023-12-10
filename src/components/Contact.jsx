import React from 'react'

const Contact = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div name="contact" className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me.</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/d4df30d5-8480-4f83-ade1-5b2f1e63de28"
                        method='POST'
                        className='flex flex-col w-full md:w-1/2 space-y-5'
                    >
                        <input
                            type="text"
                            name='name'
                            placeholder='enter your name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline'
                        />
                        <input
                            type="text"
                            name='email'
                            placeholder='enter your email'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline'
                        />
                        <textarea name="message"
                            rows="10"
                            placeholder='Enter your message'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        ></textarea>
                        <button className='
                        text-white 
                        bg-gradient-to-b 
                        from-cyan-500
                         to-blue-500 
                         px-6 py-3 
                         my-8 mx-auto 
                         flex items-center 
                         rounded-md 
                         hover:scale-110 duration-150'
                        >
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact