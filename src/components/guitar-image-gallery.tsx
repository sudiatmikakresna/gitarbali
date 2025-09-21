'use client'

import { useState } from 'react'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageUrl {
  url: string
  alt?: string
}

interface GuitarImageGalleryProps {
  images: ImageUrl[]
  title: string
  youtubeUrl?: string
}

export function GuitarImageGallery({
  images,
  title,
  youtubeUrl
}: GuitarImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const allImages = images || []
  const hasVideo = !!youtubeUrl
  const totalSlides = allImages.length + (hasVideo ? 1 : 0)

  const isVideoSlide = currentIndex === allImages.length && hasVideo
  const currentImage = !isVideoSlide ? allImages[currentIndex] : null

  const getYouTubeEmbedUrl = (url: string) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
    const match = url.match(regex)
    return match ? `https://www.youtube.com/embed/${match[1]}` : null
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="space-y-4">
      {/* Main Image/Video */}
      <div className="aspect-square overflow-hidden relative group bg-gray-100 rounded-lg">
        {isVideoSlide ? (
          <div className="w-full h-full flex items-center justify-center bg-black">
            <iframe
              src={getYouTubeEmbedUrl(youtubeUrl!) || ''}
              title={`${title} video`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : currentImage ? (
          <img
            src={currentImage.url}
            alt={currentImage.alt || title}
            className="w-full h-full object-cover"
          />
        ) : null}

        {/* Navigation arrows */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Slide indicators */}
        {totalSlides > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {totalSlides > 1 && (
        <div className="grid grid-cols-6 gap-2">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-square overflow-hidden rounded-md border-2 transition-colors ${
                index === currentIndex
                  ? 'border-primary'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
          {hasVideo && (
            <button
              onClick={() => setCurrentIndex(allImages.length)}
              className={`aspect-square overflow-hidden rounded-md border-2 transition-colors bg-black flex items-center justify-center ${
                currentIndex === allImages.length
                  ? 'border-primary'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <Play className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}