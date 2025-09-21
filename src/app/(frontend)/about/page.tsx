import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Music, Heart, Award, Users, MapPin, Clock, Wrench, Star } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Music',
      description: 'Every guitar we create is born from our deep love and passion for music and craftsmanship.'
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'We use only the finest materials and traditional techniques passed down through generations.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'We work closely with each customer to create instruments that match their unique musical vision.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, from wood selection to final finishing.'
    }
  ]

  const features = [
    {
      icon: Wrench,
      title: 'Handcrafted Process',
      description: 'Each guitar is meticulously handcrafted by skilled artisans using traditional woodworking techniques.',
      details: [
        'Hand-selected premium wood',
        'Traditional joinery methods',
        'Custom finishing options',
        'Quality control at every step'
      ]
    },
    {
      icon: Music,
      title: 'Custom Designs',
      description: 'We create unique instruments tailored to your specific needs and musical style.',
      details: [
        'Personalized consultations',
        'Custom specifications',
        'Unique aesthetic options',
        'Sound customization'
      ]
    },
    {
      icon: MapPin,
      title: 'Balinese Heritage',
      description: 'Our guitars carry the spirit and craftsmanship tradition of Bali, Indonesia.',
      details: [
        'Local artisan network',
        'Sustainable practices',
        'Cultural authenticity',
        'Community support'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Gitar Bali</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are passionate craftsmen dedicated to creating exceptional handmade guitars that blend
            traditional Balinese woodworking with modern musical innovation. Each instrument tells a
            story of dedication, artistry, and the rich cultural heritage of Bali.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in the heart of Denpasar, Bali, Gitar Bali began as a small workshop with a big dream:
                to create world-class guitars that honor both musical excellence and Balinese craftsmanship traditions.
              </p>
              <p>
                Our journey started with a simple belief that every musician deserves an instrument that not only
                sounds exceptional but also carries the soul of its creator. We combine time-honored techniques
                with modern innovations to craft guitars that resonate with both beginners and professional musicians.
              </p>
              <p>
                Today, we continue to grow while maintaining our commitment to quality, sustainability, and the
                preservation of traditional Balinese woodworking arts.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Music className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Workshop Image Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Our artisans at work creating beautiful guitars
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from selecting materials to delivering your finished guitar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What Makes Us Special */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Makes Us Special</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the unique aspects of our guitar-making process and what sets Gitar Bali apart.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Location & Workshop */}
        <div className="mb-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Visit Our Workshop
              </CardTitle>
              <CardDescription className="text-base">
                Experience the magic of guitar-making firsthand at our workshop in Denpasar Timur, Bali
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Workshop Experience</h3>
                  <p className="text-muted-foreground">
                    We welcome visitors to see our craftsmen at work and experience the guitar-making process.
                    Whether you&apos;re a musician, wood enthusiast, or simply curious about our craft,
                    we&apos;d love to show you around.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Denpasar Timur, Bali
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      By Appointment
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      Workshop Tours Available
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Jalan padma 134 penatih denpasar timur</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Music className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">+62 851‑4291‑0341</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Contact us to schedule a visit or discuss your custom guitar project. We&apos;re always
                    excited to meet fellow music enthusiasts and share our passion for guitar-making.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Create Your Dream Guitar?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you&apos;re looking for your first guitar or a custom masterpiece, we&apos;re here to help
            you find the perfect instrument that matches your musical vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Heart className="h-3 w-3 mr-1" />
              Handcrafted with Love
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Award className="h-3 w-3 mr-1" />
              Premium Quality
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <MapPin className="h-3 w-3 mr-1" />
              Made in Bali
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}