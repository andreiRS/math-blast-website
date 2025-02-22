import { FC } from 'react'
import { VideoPlaceholderProps } from '../types'
import heroVideo from '/src/assets/MathBlastHeroVideo.mp4'

const VideoPlaceholder: FC<VideoPlaceholderProps> = ({ className = '' }) => {
  return (
    <div className={`relative mx-auto w-full ${className}`}>
      <div className="relative aspect-[9/16] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          playsInline
          muted
          loop
          autoPlay
        />
      </div>
    </div>
  )
}

export default VideoPlaceholder
