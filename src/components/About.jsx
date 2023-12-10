import React from 'react'

const About = () => {
    return (
        <>
            <div name="about" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white px-4'>
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='pb-8 '>
                        <p className='text-4xl font-bold inline border-b-4'>About</p>
                    </div>
                    <p className='text-xl my-10 text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium natus esse corporis labore dicta, minus sed provident facilis magni libero nemo eum soluta corrupti voluptatum ullam cum, quod obcaecati. Quis ipsum ea doloremque commodi unde vero sed, eius itaque neque, labore sunt sequi quaerat? Quidem adipisci vel quod error tenetur!
                    </p>
                    <br />
                    <p className='text-xl text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illum saepe, modi, quia exercitationem sequi ipsa nisi, inventore mollitia sed sunt. Magnam aut excepturi at mollitia placeat vel eius aspernatur veniam dolores fuga, rerum dolore incidunt fugit ab omnis cumque quis molestias nulla ipsam voluptates hic expedita dicta! Explicabo, qui.
                    </p>
                </div>
            </div>
            <hr />
        </>
    )
}

export default About