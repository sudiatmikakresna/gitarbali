'use client'

import { useState } from 'react'
import { Share2, Copy, Check, Facebook, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TikTokIcon } from '@/components/icons/platform-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface ShareButtonProps {
  title: string
  description: string
  price: number
  guitarId: string
  imageUrl?: string
}

export function ShareButton({ title, description, price, guitarId, imageUrl: _imageUrl }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const guitarUrl = `${window.location.origin}/guitar/${guitarId}`
  const shortDescription = description.length > 100
    ? description.substring(0, 100) + '...'
    : description

  const shareText = `🎸 ${title}

${shortDescription}

💰 Price: ${formatPrice(price)}

Check it out: ${guitarUrl}

#GitarBali #HandcraftedGuitars #MadeInBali`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const shareToWhatsApp = () => {
    const whatsappText = encodeURIComponent(shareText)
    window.open(`https://wa.me/?text=${whatsappText}`, '_blank')
  }

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(guitarUrl)}&quote=${encodeURIComponent(shareText)}`
    window.open(facebookUrl, '_blank')
  }

  const shareToTikTok = () => {
    // TikTok doesn't have a direct share URL, so we'll copy to clipboard with TikTok-friendly format
    const tiktokText = `🎸 ${title} - ${formatPrice(price)} 🔥

${shortDescription}

Link in bio! 👆

#GitarBali #Guitar #HandMade #Bali #Music #GuitarLover`

    navigator.clipboard.writeText(tiktokText).then(() => {
      alert('TikTok-friendly text copied! You can paste this in your TikTok post.')
    })
  }

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} - Gitar Bali`,
          text: shareText,
          url: guitarUrl,
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      // Fallback to copy to clipboard
      copyToClipboard()
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="w-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all duration-200"
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share Guitar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={nativeShare}>
          <Share2 className="h-4 w-4 mr-2" />
          Native Share
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareToWhatsApp}>
          <MessageCircle className="h-4 w-4 mr-2 text-green-600" />
          WhatsApp
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareToFacebook}>
          <Facebook className="h-4 w-4 mr-2 text-blue-600" />
          Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareToTikTok}>
          <TikTokIcon className="h-4 w-4 mr-2" />
          TikTok (Copy)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={copyToClipboard}>
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2 text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-2" />
              Copy Link
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}