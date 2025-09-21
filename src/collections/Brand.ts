import type { CollectionConfig } from 'payload'

export const Brand: CollectionConfig = {
  slug: 'brands',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Brand Name',
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Brand Description',
    },
  ],
}