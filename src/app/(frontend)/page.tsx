import { headers as getHeaders } from 'next/headers.js'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Gitar Bali
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover handcrafted guitars made with passion in Bali. Each instrument tells a story of traditional craftsmanship and modern innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/guitars">View Our Guitars</Link>
            </Button>
            {user ? (
              <Button variant="outline" size="lg" asChild>
                <Link href="/admin">Admin Panel</Link>
              </Button>
            ) : (
              <Button variant="outline" size="lg" asChild>
                <Link href="/admin">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Guitars?</h2>
            <p className="text-muted-foreground">Experience the perfect blend of tradition and quality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Handcrafted Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Each guitar is meticulously crafted by skilled artisans using traditional techniques passed down through generations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We use only the finest woods and materials sourced responsibly to ensure exceptional sound quality and durability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Unique Designs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every guitar features unique artistic elements inspired by Balinese culture, making each piece a work of art.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {user && (
        <section className="py-8 px-4 text-center bg-primary/10">
          <p className="text-primary">Welcome back, {user.email}!</p>
        </section>
      )}
    </div>
  )
}
