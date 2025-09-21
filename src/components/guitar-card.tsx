'use client'

import Link from 'next/link'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { TikTokIcon } from '@/components/icons/platform-icons'
import Image from 'next/image'

interface ImageUrl {
  url: string
  alt?: string
}

interface Brand {
  id: string
  name: string
}

interface Type {
  id: string
  name: string
}

interface GuitarPost {
  id: string
  title: string
  description: string
  price: number
  brand?: Brand
  type?: Type
  imageUrls?: ImageUrl[]
  youtubeVideoUrl?: string
  tokopediaLink?: string
  shopeeLink?: string
  tiktokLink?: string
}

interface GuitarCardProps {
  guitar: GuitarPost
}

export function GuitarCard({ guitar }: GuitarCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getYouTubeEmbedUrl = (url: string) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const allImages = guitar.imageUrls || [];
  const hasVideo = !!guitar.youtubeVideoUrl;
  const totalSlides = allImages.length + (hasVideo ? 1 : 0);

  const isVideoSlide = currentImageIndex === allImages.length && hasVideo;
  const currentImage = !isVideoSlide ? allImages[currentImageIndex] : null;

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <Card className="overflow-hidden">
      {/* Slider Gallery */}
      {(allImages.length > 0 || hasVideo) && (
        <div className="aspect-square overflow-hidden relative group">
          {/* Current slide content */}
          {isVideoSlide ? (
            <div className="w-full h-full flex items-center justify-center bg-black">
              <iframe
                src={getYouTubeEmbedUrl(guitar.youtubeVideoUrl!) || ''}
                title={`${guitar.title} video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : currentImage ? (
            <img
              src={currentImage.url}
              alt={currentImage.alt || guitar.title}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          ) : null}

          {/* Navigation arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}

          {/* Slide indicators */}
          {totalSlides > 1 && (
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Badges */}
          {isVideoSlide && (
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Play className="h-3 w-3" />
                Video
              </Badge>
            </div>
          )}

          {totalSlides > 1 && (
            <div className="absolute top-2 left-2">
              <Badge variant="secondary">
                {currentImageIndex + 1}/{totalSlides}
              </Badge>
            </div>
          )}

          {/* Price badge */}
          <div className="absolute bottom-2 left-2">
            <Badge variant="default" className="bg-primary text-primary-foreground font-semibold text-sm px-3 py-1">
              {formatPrice(guitar.price)}
            </Badge>
          </div>
        </div>
      )}

      {/* Thumbnail Navigation */}
      {totalSlides > 1 && (
        <CardContent className="pt-3 pb-0">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {allImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-12 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                  index === currentImageIndex
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
                onClick={() => setCurrentImageIndex(allImages.length)}
                className={`flex-shrink-0 w-12 h-12 rounded-md overflow-hidden border-2 transition-colors bg-black flex items-center justify-center ${
                  currentImageIndex === allImages.length
                    ? 'border-primary'
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <Play className="h-4 w-4 text-white" />
              </button>
            )}
          </div>
        </CardContent>
      )}

      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">
            <Link
              href={`/guitar/${guitar.id}`}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {guitar.title}
            </Link>
          </CardTitle>
          <div className="text-right">
            <div className="text-lg font-bold text-primary">
              {formatPrice(guitar.price)}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {guitar.brand && (
            <Badge variant="outline" className="text-xs">
              {guitar.brand.name}
            </Badge>
          )}
          {guitar.type && (
            <Badge variant="secondary" className="text-xs">
              {guitar.type.name}
            </Badge>
          )}
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          {guitar.description}
        </CardDescription>
      </CardHeader>


      <CardFooter className="flex flex-wrap gap-2">
        {guitar.tokopediaLink && (
          <Button variant="outline" size="sm" asChild className="w-10 h-10 p-1 hover:bg-gray-50">
            <Link href={guitar.tokopediaLink} target="_blank" rel="noopener noreferrer" title="Tokopedia">
              <Image
                src="/images/tokped.png"
                alt="Tokopedia"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
          </Button>
        )}
        {guitar.shopeeLink && (
          <Button variant="outline" size="sm" asChild className="w-10 h-10 p-1 hover:bg-gray-50">
            <Link href={guitar.shopeeLink} target="_blank" rel="noopener noreferrer" title="Shopee">
              <Image
                src="/images/shopee.png"
                alt="Shopee"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
          </Button>
        )}
        {guitar.tiktokLink && (
          <Button variant="outline" size="sm" asChild className="w-10 h-10 p-0 text-black hover:text-gray-800 hover:bg-gray-50">
            <Link href={guitar.tiktokLink} target="_blank" rel="noopener noreferrer" title="TikTok">
              <TikTokIcon className="h-5 w-5" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}