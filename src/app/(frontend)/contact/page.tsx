import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function ContactPage() {

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+62 812-3456-7890',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@gitarbali.com',
      description: 'Send us your questions anytime'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Ubud, Bali, Indonesia',
      description: 'Visit our guitar workshop'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9AM - 6PM',
      description: 'Closed on Sundays'
    }
  ]

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@gitarbali',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'Gitar Bali',
      color: 'bg-blue-600'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      handle: '+62 812-3456-7890',
      color: 'bg-green-500'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our handcrafted guitars? We&apos;d love to hear from you.
            Reach out and let&apos;s discuss how we can help you find your perfect instrument.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Multiple ways to reach our team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm font-medium text-primary">{item.content}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
                <CardDescription>
                  Stay connected on social media
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className={`p-2 rounded-lg ${social.color}`}>
                        <social.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Map */}
        <div className="mt-12">
          <Card className="overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Visit Our Workshop
              </CardTitle>
              <CardDescription>
                Located in the heart of Ubud, Bali. See our craftsmen at work and try our guitars in person.
              </CardDescription>
              <div className="flex justify-center gap-4 mt-4">
                <Badge variant="outline">
                  <MapPin className="h-3 w-3 mr-1" />
                  Ubud, Bali
                </Badge>
                <Badge variant="outline">
                  <Clock className="h-3 w-3 mr-1" />
                  By Appointment
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63115.4225988967!2d115.16084704863279!3d-8.623440099999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f308b379781%3A0xde35e214e1633a48!2sGitar%20Bali%20Music%20Store!5e0!3m2!1sid!2sid!4v1758448984399!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gitar Bali Music Store Location"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}