'use client'

import { useState } from 'react'
import { GuitarCard } from '@/components/guitar-card'
import { GuitarFilters } from '@/components/guitar-filters'

interface Brand {
  id: string
  name: string
}

interface Type {
  id: string
  name: string
}

interface Guitar {
  id: string
  title: string
  description: string
  price: number
  brand?: Brand
  type?: Type
  imageUrls?: { url: string }[]
  youtubeVideoUrl?: string
  tokopediaLink?: string
  shopeeLink?: string
  tiktokLink?: string
}

interface SelectedFilters {
  brandIds: string[]
  typeIds: string[]
}

interface GuitarListWithFiltersProps {
  initialGuitars: Guitar[]
  brands: Brand[]
  types: Type[]
}

export function GuitarListWithFilters({ initialGuitars, brands, types }: GuitarListWithFiltersProps) {
  const [filteredGuitars, setFilteredGuitars] = useState<Guitar[]>(initialGuitars)

  const handleFiltersChange = (filters: SelectedFilters) => {
    let filtered = initialGuitars

    // Filter by brands
    if (filters.brandIds.length > 0) {
      filtered = filtered.filter(guitar =>
        guitar.brand && filters.brandIds.includes(guitar.brand.id)
      )
    }

    // Filter by types
    if (filters.typeIds.length > 0) {
      filtered = filtered.filter(guitar =>
        guitar.type && filters.typeIds.includes(guitar.type.id)
      )
    }

    setFilteredGuitars(filtered)
  }

  return (
    <>
      {/* Filters */}
      <GuitarFilters
        filterOptions={{
          brands: brands,
          types: types,
        }}
        onFiltersChange={handleFiltersChange}
      />

      {filteredGuitars.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            {initialGuitars.length === 0
              ? "No guitars available at the moment. Please check back later!"
              : "No guitars match your current filters. Try adjusting your selection."
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGuitars.map((guitar) => (
            <GuitarCard
              key={guitar.id}
              guitar={guitar}
            />
          ))}
        </div>
      )}
    </>
  )
}