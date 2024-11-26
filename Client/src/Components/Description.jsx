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
                    <p>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, out tool transform your text into eye-catching images with just a few clicks. Image it, describe it, and watch it come to life instantly.</p>
                </div>
            </div>
        </div>
    )
}

export default Description
