import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Music, Heart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Guitar Collection', href: '/' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'About Us', href: '#' },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      href: '#',
      icon: MessageCircle,
      color: 'hover:text-green-500'
    }
  ]

  const guitarTypes = [
    'Acoustic Guitars',
    'Electric Guitars',
    'Classical Guitars',
    'Custom Guitars'
  ]

  return (
    <footer className="bg-muted/30 border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Music className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Gitar Bali</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Handcrafted guitars made with passion in Bali. Each instrument tells a story of traditional
                craftsmanship and modern innovation, bringing you the finest musical experience.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Ubud, Bali, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">hello@gitarbali.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guitar Categories */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Our Guitars
              </h4>
              <ul className="space-y-3">
                {guitarTypes.map((type) => (
                  <li key={type}>
                    <span className="text-sm text-muted-foreground">
                      {type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border"></div>

        {/* Bottom Section */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Gitar Bali. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>in Bali</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-1">
              <span className="text-sm text-muted-foreground mr-3">Follow us:</span>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={`p-2 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="text-xs">
                <Music className="h-3 w-3 mr-1" />
                Handcrafted
              </Badge>
              <Badge variant="outline" className="text-xs">
                <MapPin className="h-3 w-3 mr-1" />
                Made in Bali
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Heart className="h-3 w-3 mr-1" />
                With Love
              </Badge>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Every guitar is crafted with precision and care by skilled artisans in Ubud, Bali
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}