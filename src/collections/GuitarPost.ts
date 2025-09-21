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
      name: 'brand',
      type: 'relationship',
      relationTo: 'brands',
      required: true,
      label: 'Brand',
    },
    {
      name: 'type',
      type: 'relationship',
      relationTo: 'types',
      required: true,
      label: 'Guitar Type',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Specifications',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      label: 'Price (IDR)',
      min: 0,
    },
    {
      name: 'imageUrls',
      type: 'array',
      label: 'Image URLs',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'Image URL',
        },
        {
          name: 'alt',
          type: 'text',
          required: false,
          label: 'Alt Text',
        },
      ],
    },
    {
      name: 'youtubeVideoUrl',
      type: 'text',
      required: false,
      label: 'YouTube Video URL',
      validate: (value: string | null | undefined) => {
        if (!value) return true;
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)[a-zA-Z0-9_-]{11}/;
        return youtubeRegex.test(value) || 'Please enter a valid YouTube URL';
      },
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