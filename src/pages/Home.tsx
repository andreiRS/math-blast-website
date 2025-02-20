import { FC } from 'react'
import VideoPlaceholder from '../components/VideoPlaceholder'

const Home: FC = () => {
  return (
    <section className="relative pt-16 bg-gradient-to-br from-brand-mint via-white to-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Text Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Make Math Fun!
            </h1>
            <p className="mt-3 text-xl text-gray-500 sm:mt-5">
              A colorful and engaging math game for kids aged 8-10 years old. Practice basic arithmetic while having fun!
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#download"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-blue rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Playing
              </a>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <VideoPlaceholder />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
