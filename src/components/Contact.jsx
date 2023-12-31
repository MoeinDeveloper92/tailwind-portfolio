import React from 'react'

const Contact = () => {


    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-500 text-white px-10 '>
            <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full '>
                <div className='pb-8'>
                    <p className='text-4xl inline border-b-2 border-gray-500'>Contact</p>
                    <p className='py-4'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center px-1'>
                    <form
                        method='POST'
                        action="https://getform.io/f/6ce5f292-f241-4aee-a66f-84b89c0084e8"
                        className='flex flex-col w-full md:w-1/2 space-y-5'
                    >
                        <input
                            type="text"
                            name='name'
                            placeholder='enter your name'
                            className='p-2 bg-transparent border-2 roudned-md text-white focus:outline-none'
                        />
                        <input
                            type="text"
                            name='email'
                            placeholder='enter your email'
                            className='p-2 bg-transparent border-2 roudned-md text-black focus:outline-none'
                        />
                        <textarea name="message"
                            rows="10"
                            placeholder='Enter you message to me'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        ></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200'>Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact