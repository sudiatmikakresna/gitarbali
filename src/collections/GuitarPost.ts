import type { CollectionConfig } from 'payload'

export const GuitarPost: CollectionConfig = {
  slug: 'guitar-posts',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'thumbnailUrl',
      type: 'text',
      required: true,
      label: 'Thumbnail URL',
    },
    {
      name: 'tokopediaLink',
      type: 'text',
      required: false,
      label: 'Tokopedia Link',
    },
    {
      name: 'shopeeLink',
      type: 'text',
      required: false,
      label: 'Shopee Link',
    },
    {
      name: 'tiktokLink',
      type: 'text',
      required: false,
      label: 'TikTok Link',
    },
  ],
}