import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { GuitarCard } from '@/components/guitar-card'

export default async function GuitarsPage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch guitar posts from Payload CMS
  const guitarPosts = await payload.find({
    collection: 'guitar-posts',
    limit: 1000,
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

        {guitarPosts.docs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No guitars available at the moment. Please check back later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {guitarPosts.docs.map((guitar: any) => (
              <GuitarCard
                key={guitar.id}
                guitar={{
                  id: guitar.id,
                  title: guitar.title,
                  description: guitar.description,
                  thumbnailUrl: guitar.thumbnailUrl,
                  tokopediaLink: guitar.tokopediaLink,
                  shopeeLink: guitar.shopeeLink,
                  tiktokLink: guitar.tiktokLink,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}