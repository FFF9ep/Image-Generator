import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
    return (
        <div className='flex flex-col justify-center items-center my-24 p-6 md:px-28'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
            <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

            <div>
                <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
                <div>
                    <h2>Introducing the AI-Powered Text to Image Generator</h2>
                </div>
            </div>
        </div>
    )
}

export default Description
