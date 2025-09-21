import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Play } from 'lucide-react'
import config from '@/payload.config'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TikTokIcon } from '@/components/icons/platform-icons'
import Image from 'next/image'
import { GuitarImageGallery } from '@/components/guitar-image-gallery'

interface Props {
  params: Promise<{ id: string }>
}

export default async function GuitarDetailPage({ params }: Props) {
  const { id } = await params
  const _headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const [guitar, brands, types] = await Promise.all([
      payload.findByID({
        collection: 'guitar-posts',
        id: id,
      }),
      payload.find({
        collection: 'brands',
        limit: 1000,
      }),
      payload.find({
        collection: 'types',
        limit: 1000,
      }),
    ])

    if (!guitar) {
      notFound()
    }

    // Manually populate brand and type
    const brandObj: any = brands.docs.find((b: any) => b.id === guitar.brand)
    const typeObj: any = types.docs.find((t: any) => t.id === guitar.type)

    const populatedGuitar = {
      ...guitar,
      brand: brandObj,
      type: typeObj,
    }

    const formatPrice = (price: number) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price)
    }

    const getYouTubeEmbedUrl = (url: string) => {
      const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
      const match = url.match(regex)
      return match ? `https://www.youtube.com/embed/${match[1]}` : null
    }

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="outline" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Guitars
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              {populatedGuitar.imageUrls && populatedGuitar.imageUrls.length > 0 && (
                <GuitarImageGallery
                  images={populatedGuitar.imageUrls.map((img: any) => ({
                    url: img.url,
                    alt: img.alt || undefined
                  }))}
                  title={populatedGuitar.title}
                  youtubeUrl={populatedGuitar.youtubeVideoUrl || undefined}
                />
              )}
            </div>

            {/* Guitar Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{populatedGuitar.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  {populatedGuitar.brand && (
                    <Badge variant="outline" className="text-sm">
                      {populatedGuitar.brand.name}
                    </Badge>
                  )}
                  {populatedGuitar.type && (
                    <Badge variant="secondary" className="text-sm">
                      {populatedGuitar.type.name}
                    </Badge>
                  )}
                </div>
                <div className="text-2xl font-bold text-primary mb-4">
                  {formatPrice(populatedGuitar.price)}
                </div>
              </div>

              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="whitespace-pre-wrap text-sm text-muted-foreground">
                    {populatedGuitar.description}
                  </div>
                </CardContent>
              </Card>

              {/* YouTube Video */}
              {populatedGuitar.youtubeVideoUrl && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      Demo Video
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video">
                      <iframe
                        src={getYouTubeEmbedUrl(populatedGuitar.youtubeVideoUrl) || ''}
                        title={`${populatedGuitar.title} demo video`}
                        className="w-full h-full rounded-md"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Purchase Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Purchase Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {populatedGuitar.tokopediaLink && (
                      <Button asChild className="flex items-center gap-2">
                        <Link href={populatedGuitar.tokopediaLink} target="_blank" rel="noopener noreferrer">
                          <Image
                            src="/images/tokped.png"
                            alt="Tokopedia"
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                          Buy on Tokopedia
                        </Link>
                      </Button>
                    )}
                    {populatedGuitar.shopeeLink && (
                      <Button asChild className="flex items-center gap-2" variant="outline">
                        <Link href={populatedGuitar.shopeeLink} target="_blank" rel="noopener noreferrer">
                          <Image
                            src="/images/shopee.png"
                            alt="Shopee"
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                          Buy on Shopee
                        </Link>
                      </Button>
                    )}
                    {populatedGuitar.tiktokLink && (
                      <Button asChild variant="outline" className="flex items-center gap-2">
                        <Link href={populatedGuitar.tiktokLink} target="_blank" rel="noopener noreferrer">
                          <TikTokIcon className="h-4 w-4" />
                          View on TikTok
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (_error) {
    notFound()
  }
}

