import React from 'react'
import Card from './Card'
import Button from './Button'
import Benefits from './Benefits'

const Services = () => {
  const services = [
    {
      title: 'Renting Offices',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris',
      image:
        'https://tse1.mm.bing.net/th/id/OIP.fzteOlMnCz-Zmq8UvyHUXwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      title: 'Coffee Shop',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris',
      image:
        'https://th.bing.com/th/id/R.11767d0d75deb1ecbfab56c09be82278?rik=4T6BmuTV6u0oUQ&pid=ImgRaw&r=0'
    },
    {
      title: 'Private Event Space',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris',
      image:
        'https://i0.wp.com/weddingseason.ie/wp-content/uploads/2022/11/Untitled-design-26.png'
    }
  ]

  return (
    <section id='space' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center space-y-6 mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight'>
            We Offer creative working environments
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Find your perfect workspace. Choose from versatile options tailored
            to your needs.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {services.map((service, index) =>
            <div
              key={index}
              className='group hover:shadow-xl transition-all duration-300 border-0 shadow-lg'
            >
              <div className='p-0'>
                <div className='space-y-6'>
                  <div className='aspect-[4/3] bg-gray-100 rounded-t-lg overflow-hidden'>
                    <img
                      src={service.image || '/placeholder.svg'}
                      alt={service.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  </div>
                  <div className='px-6 pb-6 space-y-4'>
                    <h3 className='text-xl font-semibold text-teal-600 text-center relative pb-3'>
                      {service.title}
                      <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-teal-600' />
                    </h3>
                    <p className='text-gray-600 text-center leading-relaxed text-sm'>
                      {service.description}
                    </p>
                    <div className='flex justify-center pt-2'>
                      <Button
                        variant='ghost'
                        className='text-teal-600 hover:text-teal-700 hover:bg-teal-50 font-medium px-0'
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* About Us Section */}
 
        <Benefits />
      </div>
    </section>
  )
}

export default Services
