import type { CollectionConfig } from 'payload'

export const Type: CollectionConfig = {
  slug: 'types',
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
      label: 'Type Name',
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Type Description',
    },
  ],
}