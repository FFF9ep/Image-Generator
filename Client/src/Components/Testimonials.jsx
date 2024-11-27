import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
    return (
        <div className='flex flex-col justify-center items-center my-20 py-12'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Testimonials</h1>
            <p className='text-gray-500 mb-12'>What our user saying</p>

            <div className='flex flex-wrap gap-6'>
                {testimonialsData.map((testimonials, index) => (
                    <div key={index}>
                        <div>
                            <img src={testimonials.image} alt="" className='rounded-full w-14' />
                            <h2>{testimonials.name}</h2>
                            <p>{testimonials.role}</p>
                            <div className='flex mb-4'>
                                {Array(testimonials.stars).fill().map((item, index) => (
                                    <img key={index} src={assets.rating_star} alt="" />
                                ))}
                            </div>
                            <p>{testimonials.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
