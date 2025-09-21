import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { GuitarListWithFilters } from '@/components/guitar-list-with-filters'

interface Guitar {
  id: string
  title: string
  description: string
  price: number
  brand?: { name: string }
  type?: { name: string }
  imageUrls?: { url: string }[]
  youtubeVideoUrl?: string
  tokopediaLink?: string
  shopeeLink?: string
  tiktokLink?: string
}

export default async function HomePage() {
  const _headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch guitar posts from Payload CMS
  const [guitarPosts, brands, types] = await Promise.all([
    payload.find({
      collection: 'guitar-posts',
      limit: 1000,
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

  const guitars = guitarPosts.docs.map((guitar: any) => {
    const brandObj = brands.docs.find((b: any) => b.id === guitar.brand)
    const typeObj = types.docs.find((t: any) => t.id === guitar.type)

    return {
      id: guitar.id,
      title: guitar.title,
      description: guitar.description,
      price: guitar.price,
      brand: brandObj,
      type: typeObj,
      imageUrls: guitar.imageUrls,
      youtubeVideoUrl: guitar.youtubeVideoUrl,
      tokopediaLink: guitar.tokopediaLink,
      shopeeLink: guitar.shopeeLink,
      tiktokLink: guitar.tiktokLink,
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Guitar Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handcrafted guitars from Bali. Each instrument is made with passion and precision.
          </p>
        </div>

        <GuitarListWithFilters
          initialGuitars={guitars}
          brands={brands.docs}
          types={types.docs}
        />
      </div>
    </div>
  )
}