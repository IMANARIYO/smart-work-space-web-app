import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
     <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://icowork-static-prd.s3.amazonaws.com/media/spaces/89/_MG_1688_1.jpg"
            alt="Modern office workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <p className="text-white text-lg sm:text-xl mb-6 font-medium">The Best WorkSpace in Kigali</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-teal-400">Professional</span>
            <span className="text-white">, </span>
            <span className="text-white">Creative</span>
            <span className="text-white">, </span>
            <br className="hidden sm:block" />
            <span className="text-white">Flexible</span>
            <span className="text-white">, </span>
            <span className="text-white">Scalable </span>
            <span className="text-teal-400">Workspace</span>
          </h1>

          <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces. Elevate
            your business with flexible solutions tailored to your needs. Find your perfect office today!
          </p>

          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore
          </Button>
        </div>
      </section>

  )
}

export default Hero
