import Link from 'next/link'
import { Star, ExternalLink, Heart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export function RatingsDisplay() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">Customer Reviews</h3>
        <p className="text-sm text-muted-foreground">
          See what our customers say about our guitars
        </p>
      </div>

      {/* Side by Side Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Shopee Store Embed */}
        <div className="space-y-4">
          <div className="text-center">
            <Link
              href="https://shopee.co.id/gitarbalireal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors w-full sm:w-auto justify-center"
            >
              <Image
                src="/images/shopee.png"
                alt="Shopee"
                width={20}
                height={20}
                className="object-contain brightness-0 invert"
              />
              Visit Our Shopee Store
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          {/* Shopee Store Preview Frame */}
          <div className="border border-border rounded-lg overflow-hidden bg-background">
            <div className="p-3 bg-muted/50 border-b border-border flex items-center gap-2">
              <Image
                src="/images/shopee.png"
                alt="Shopee"
                width={16}
                height={16}
                className="object-contain"
              />
              <span className="text-sm font-medium">Shopee Store - GitarBaliReal</span>
            </div>
            <div className="h-40 lg:h-48 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 flex items-center justify-center">
              <div className="text-center space-y-2">
                <Image
                  src="/images/shopee.png"
                  alt="Shopee"
                  width={32}
                  height={32}
                  className="object-contain mx-auto opacity-60"
                />
                <p className="text-sm text-muted-foreground">Live Store Ratings</p>
                <p className="text-xs text-muted-foreground px-2">Click button above to view real ratings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Business Embed */}
        <div className="space-y-4">
          <div className="text-center">
            <Link
              href="https://maps.app.goo.gl/5vAiMYVR1AAbon3x6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors w-full sm:w-auto justify-center"
            >
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-blue-500">G</span>
              </div>
              View Google Reviews
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          {/* Google Maps Embed */}
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="p-3 bg-muted/50 border-b border-border flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">G</span>
              </div>
              <span className="text-sm font-medium">Google Maps - Gitar Bali Workshop</span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2!2d115.2!3d-8.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDInMDAuMCJTIDExNcKwMTInMDAuMCJF!5e0!3m2!1sen!2sid!4v1"
              width="100%"
              height="160"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gitar Bali Workshop Location"
              className="w-full lg:h-48"
            />
          </div>
        </div>
      </div>

      {/* Call to Action for Reviews */}
      <div className="text-center p-4 bg-muted/30 rounded-lg">
        <Badge variant="outline" className="mb-3">
          <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
          Customer Verified
        </Badge>
        <p className="text-sm text-muted-foreground mb-3">
          Check our live ratings and customer reviews on Shopee and Google
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="text-xs">
            <Heart className="h-3 w-3 mr-1" />
            Real Reviews
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Star className="h-3 w-3 mr-1" />
            Verified Purchases
          </Badge>
        </div>
      </div>
    </div>
  )
}