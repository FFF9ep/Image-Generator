import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center my-20'>

            <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
                <p>Best Text to Image Generator</p>
                <img src={assets.star_icon} alt="" />
            </div>

            <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn Text to <span className='text-blue-600'>Image</span>, in seconds</h1>
        </div>
    )
}

export default Header