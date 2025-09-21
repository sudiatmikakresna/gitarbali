import Link from 'next/link'
import { Star, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface RatingProps {
  platform: 'shopee' | 'google'
  rating: number
  reviewCount: number
  link: string
}

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  const starSize = size === 'md' ? 'h-4 w-4' : 'h-3 w-3'

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={`full-${i}`} className={`${starSize} fill-yellow-400 text-yellow-400`} />
    )
  }

  // Half star
  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative">
        <Star className={`${starSize} text-gray-300`} />
        <div className="absolute inset-0 overflow-hidden w-1/2">
          <Star className={`${starSize} fill-yellow-400 text-yellow-400`} />
        </div>
      </div>
    )
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star key={`empty-${i}`} className={`${starSize} text-gray-300`} />
    )
  }

  return <div className="flex items-center gap-0.5">{stars}</div>
}

function RatingCard({ platform, rating, reviewCount, link }: RatingProps) {
  const platformConfig = {
    shopee: {
      name: 'Shopee',
      color: 'bg-orange-500',
      textColor: 'text-orange-600',
      logo: '/images/shopee.png'
    },
    google: {
      name: 'Google',
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      logo: null
    }
  }

  const config = platformConfig[platform]

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform hover:scale-105"
    >
      <Card className="hover:shadow-md transition-shadow cursor-pointer border border-border/50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            {/* Platform Logo/Icon */}
            <div className={`p-2 rounded-lg ${config.color} flex-shrink-0`}>
              {config.logo ? (
                <Image
                  src={config.logo}
                  alt={config.name}
                  width={20}
                  height={20}
                  className="object-contain brightness-0 invert"
                />
              ) : (
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-500">G</span>
                </div>
              )}
            </div>

            {/* Rating Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-foreground text-sm">{config.name}</span>
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </div>

              <div className="flex items-center gap-2">
                <StarRating rating={rating} size="sm" />
                <span className="font-semibold text-sm">{rating.toFixed(1)}</span>
              </div>

              <p className="text-xs text-muted-foreground mt-1">
                {reviewCount.toLocaleString()} reviews
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export function RatingsDisplay() {
  // These would typically come from an API or configuration
  const ratings = [
    {
      platform: 'shopee' as const,
      rating: 4.8,
      reviewCount: 1247,
      link: 'https://shopee.co.id/gitarbalireal' // Replace with actual Shopee store link
    },
    {
      platform: 'google' as const,
      rating: 4.9,
      reviewCount: 189,
      link: 'https://maps.google.com/maps?q=Jalan+padma+134+penatih+denpasar+timur' // Replace with actual Google Business link
    }
  ]

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">Customer Reviews</h3>
        <p className="text-sm text-muted-foreground">
          See what our customers say about our guitars
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ratings.map((rating) => (
          <RatingCard key={rating.platform} {...rating} />
        ))}
      </div>

      {/* Overall Rating Summary */}
      <div className="text-center p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center justify-center gap-2 mb-2">
          <StarRating rating={4.85} size="md" />
          <span className="text-lg font-bold">4.9</span>
          <span className="text-sm text-muted-foreground">overall</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Based on {(1247 + 189).toLocaleString()} total reviews
        </p>
        <Badge variant="outline" className="mt-2 text-xs">
          <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
          Highly Rated
        </Badge>
      </div>
    </div>
  )
}