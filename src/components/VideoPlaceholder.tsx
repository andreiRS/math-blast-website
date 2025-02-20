import { FC } from 'react'
import { VideoPlaceholderProps } from '../types'

const VideoPlaceholder: FC<VideoPlaceholderProps> = ({ className = '' }) => {
  return (
    <div className={`relative mx-auto w-full max-w-[320px] ${className}`}>
      {/* Video Container with 9:16 aspect ratio */}
      <div className="relative bg-gray-900 rounded-3xl shadow-2xl aspect-[9/16] overflow-hidden">
        {/* Placeholder Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-blue to-brand-pink opacity-20" />
        
        {/* Play Button */}
        <button className="absolute inset-0 w-full h-full flex items-center justify-center group">
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Play Button Background */}
            <div className="absolute inset-0 bg-white rounded-full opacity-90 group-hover:opacity-100 transition-opacity" />
            {/* Play Icon */}
            <svg className="relative w-10 h-10 text-brand-blue group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>

        {/* Placeholder Text */}
        <div className="absolute bottom-4 left-4 right-4 text-white text-center opacity-60">
          <p className="text-sm">Game Preview</p>
        </div>
      </div>
    </div>
  )
}

export default VideoPlaceholder
