import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-t mx-auto flex flex-col justify-center w-full md:h-screen'>

                <div className='pb-8 px-10'>
                    <p className='text-4xl inline font-bold border-b-4 border-gray-500'>About</p>
                </div>

                <br />
                <p className='text-xl mt-20 text-justify px-10'>
                    Throughout my career, I have worked on diverse projects, including e-commerce platforms, social media applications, and healthcare systems. I am passionate about creating high-quality solutions that meet user needs. With a focus on creating scalable and maintainable code, I strive to deliver applications that are both efficient and user-friendly. I am excited to work with innovative teams and companies that share my passion for cutting-edge applications and provide opportunities for continuous growth and learning.

                    I am a strong believer in continuous learning and improvement, and I am always looking for new challenges and opportunities to grow my skills and expertise. If you are looking for a skilled and passionate MERN stack developer to join your team, please don't hesitate to get in touch.
                </p>
                <p className='text-xl mt-10 px-10 text-justify'>

                    As for, my projects, you can find them on my GitHub account in my public Repositories. https://github.com/moeinDeveloper92.
                    As for my educational background, I hold a bachelor degree in Com sci, and I am studying Data analytics at Berlin University.
                    Projects:
                    1-House Market application which I have used Firebase 9 for database, and leaflet for map and google Oath for Authentication. It is a cool application that in which clients can sign up , and search for a house.
                    2-Bootcamp website. I have used MERN technology for this project. Although, I was solely responsible to create the backend of this project, ended up making UI by React and CSS.
                    3-Github Account finder, which I have used GitHub RESTFUL APIs to fetch user's data and show them on the UI, and I have used Tailwind and Daisyui for user interface.
                    4-Feedback Rating application which I have created it by React.
                    5-House Market application which I have used Firebase 9 for database, and leaflet for map and google Oath for Authentication. It is a cool application that in which clients can sign up , and search for a house.
                </p>
                <br />
            </div>
        </div>
    )
}

export default About