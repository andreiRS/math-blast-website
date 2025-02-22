import { FC } from 'react'
import VideoPlaceholder from '../components/VideoPlaceholder'

const Home: FC = () => {
  const features = [
    {
      title: "Fun Learning Experience",
      description: "Interactive math challenges that make learning enjoyable and engaging",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-rainbow-red',
      gradient: 'from-rainbow-red to-rainbow-orange'
    },
    {
      title: "Age-Appropriate Content",
      description: "Specially designed for kids aged 8-10 years old",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bgColor: 'bg-rainbow-yellow',
      gradient: 'from-rainbow-yellow to-rainbow-green'
    },
    {
      title: "Progress Tracking",
      description: "Monitor your child's mathematical development over time",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      bgColor: 'bg-rainbow-blue',
      gradient: 'from-rainbow-blue to-rainbow-purple'
    }
  ]

  return (
    <main className="bg-background overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-wave-pattern opacity-60 animate-wave scale-150"></div>
        <div className="absolute inset-0 bg-wave-pattern opacity-60 animate-wave-slow scale-150" style={{ animationDelay: '-15s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Text Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-5xl tracking-tight font-extrabold text-primary sm:text-6xl md:text-7xl">
              MathBlast
            </h1>
            <p className="mt-6 text-xl text-gray-700 sm:mt-8">
              A fun math learning game that makes arithmetic exciting for kids aged 8-10 years old.
            </p>
            
            {/* Google Play Button */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.mathblast"
                className="group inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <span className="group-hover:text-white transition-colors">Get it on Google Play</span>
              </a>
            </div>
          </div>

          {/* Game Preview */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full max-w-[320px] rounded-[2rem] shadow-lg overflow-hidden bg-white">
              <VideoPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Why Choose MathBlast
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            Making mathematics fun and engaging for young minds
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              <div className={`inline-flex items-center justify-center p-4 ${feature.bgColor} rounded-2xl text-white mb-6 shadow-lg group-hover:scale-105 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
