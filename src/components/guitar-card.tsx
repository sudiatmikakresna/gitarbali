import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface GuitarPost {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  tokopediaLink?: string
  shopeeLink?: string
  tiktokLink?: string
}

interface GuitarCardProps {
  guitar: GuitarPost
}

export function GuitarCard({ guitar }: GuitarCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">{guitar.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {guitar.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-wrap gap-2">
        {guitar.tokopediaLink && (
          <Button variant="outline" size="sm" asChild>
            <Link href={guitar.tokopediaLink} target="_blank" rel="noopener noreferrer">
              Tokopedia
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        )}
        {guitar.shopeeLink && (
          <Button variant="outline" size="sm" asChild>
            <Link href={guitar.shopeeLink} target="_blank" rel="noopener noreferrer">
              Shopee
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        )}
        {guitar.tiktokLink && (
          <Button variant="outline" size="sm" asChild>
            <Link href={guitar.tiktokLink} target="_blank" rel="noopener noreferrer">
              TikTok
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}