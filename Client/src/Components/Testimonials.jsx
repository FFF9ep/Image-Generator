import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
    return (
        <div className='flex flex-col justify-center items-center my-20 py-12'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Testimonials</h1>
            <p className='text-gray-500 mb-12'>What our user saying</p>

            <div className='flex flex-wrap gap-6'>
                {testimonialsData.map((testimonials, index) => (
                    <div key={index}>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
