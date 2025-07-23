import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <section id='about' className='py-20 bg-secondary/10'>
      <div className='mt-20 bg-gray-50 py-16 px-8 rounded-2xl'>
        <div className='max-w-6xl mx-auto'>
          {/* Navigation Indicators */}
          <div className='flex justify-center space-x-3 mb-12'>
            <div className='w-3 h-3 bg-teal-600 rounded-full' />
            <div className='w-3 h-3 border-2 border-teal-600 rounded-full' />
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center relative'>
            {/* Left Content */}
            <div className='space-y-6'>
              <p className='text-teal-600 font-medium text-lg'>About Us</p>
              <h3 className='text-4xl font-bold text-gray-900 leading-tight'>
                We offer creative working environments that suit your business
              </h3>
            </div>

            {/* Vertical Divider - Properly positioned */}
            <div className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-400 transform -translate-x-1/2 h-full' />

            {/* Right Content */}
            <div className='space-y-6'>
              <p className='text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit torquent,
                conubia leo rutrum praesent dui turpis lobortis, vulputate
                pellentesque tristique primis cum tincidunt placerat maecenas,
                velit metus fermentum eget
              </p>
              <Button
                variant='ghost'
                className='text-teal-600 hover:text-teal-700 hover:bg-teal-50 font-medium px-0'
              >
                More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
