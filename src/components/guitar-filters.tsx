'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { X, Filter, Music, Star, Trash2 } from 'lucide-react'

interface Brand {
  id: string
  name: string
}

interface Type {
  id: string
  name: string
}

interface FilterOptions {
  brands: Brand[]
  types: Type[]
}

interface SelectedFilters {
  brandIds: string[]
  typeIds: string[]
}

interface GuitarFiltersProps {
  filterOptions: FilterOptions
  onFiltersChange: (filters: SelectedFilters) => void
}

export function GuitarFilters({ filterOptions, onFiltersChange }: GuitarFiltersProps) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  useEffect(() => {
    onFiltersChange({
      brandIds: selectedBrands,
      typeIds: selectedTypes,
    })
  }, [selectedBrands, selectedTypes, onFiltersChange])

  const toggleBrand = (brandId: string) => {
    setSelectedBrands(prev =>
      prev.includes(brandId)
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    )
  }

  const toggleType = (typeId: string) => {
    setSelectedTypes(prev =>
      prev.includes(typeId)
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    )
  }

  const clearAllFilters = () => {
    setSelectedBrands([])
    setSelectedTypes([])
  }

  const hasActiveFilters = selectedBrands.length > 0 || selectedTypes.length > 0
  const totalActiveFilters = selectedBrands.length + selectedTypes.length

  return (
    <div className="mb-8">
      {/* Header with Filter Icon and Stats */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Filter className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Filter Guitars</h3>
              <p className="text-sm text-muted-foreground">
                {hasActiveFilters ? `${totalActiveFilters} filter${totalActiveFilters > 1 ? 's' : ''} active` : 'Find your perfect guitar'}
              </p>
            </div>
          </div>
        </div>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearAllFilters}
            className="gap-2 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
            Clear All
          </Button>
        )}
      </div>

      {/* Modern Filter Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Brand Filters */}
        {filterOptions.brands.length > 0 && (
          <Card className="border-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="text-base flex items-center gap-2">
                <Star className="h-4 w-4 text-blue-600" />
                Brands
                {selectedBrands.length > 0 && (
                  <Badge variant="secondary" className="ml-auto">
                    {selectedBrands.length}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {filterOptions.brands.map((brand) => (
                  <Button
                    key={brand.id}
                    variant={selectedBrands.includes(brand.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleBrand(brand.id)}
                    className={`text-sm font-medium transition-all duration-200 ${
                      selectedBrands.includes(brand.id)
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm transform scale-[1.02]'
                        : 'hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 dark:hover:bg-blue-950/50'
                    }`}
                  >
                    {brand.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Type Filters */}
        {filterOptions.types.length > 0 && (
          <Card className="border-0 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/20 dark:to-green-950/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="text-base flex items-center gap-2">
                <Music className="h-4 w-4 text-emerald-600" />
                Types
                {selectedTypes.length > 0 && (
                  <Badge variant="secondary" className="ml-auto">
                    {selectedTypes.length}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {filterOptions.types.map((type) => (
                  <Button
                    key={type.id}
                    variant={selectedTypes.includes(type.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleType(type.id)}
                    className={`text-sm font-medium transition-all duration-200 ${
                      selectedTypes.includes(type.id)
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transform scale-[1.02]'
                        : 'hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 dark:hover:bg-emerald-950/50'
                    }`}
                  >
                    {type.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Active Filters Summary Bar */}
      {hasActiveFilters && (
        <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium text-foreground">Active Filters:</div>
              <div className="flex flex-wrap gap-2">
                {selectedBrands.map((brandId) => {
                  const brand = filterOptions.brands.find(b => b.id === brandId)
                  return brand ? (
                    <Badge
                      key={brandId}
                      variant="default"
                      className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer transition-colors text-xs px-3 py-1"
                      onClick={() => toggleBrand(brandId)}
                    >
                      <Star className="h-3 w-3 mr-1" />
                      {brand.name}
                      <X className="h-3 w-3 ml-1" />
                    </Badge>
                  ) : null
                })}
                {selectedTypes.map((typeId) => {
                  const type = filterOptions.types.find(t => t.id === typeId)
                  return type ? (
                    <Badge
                      key={typeId}
                      variant="secondary"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer transition-colors text-xs px-3 py-1"
                      onClick={() => toggleType(typeId)}
                    >
                      <Music className="h-3 w-3 mr-1" />
                      {type.name}
                      <X className="h-3 w-3 ml-1" />
                    </Badge>
                  ) : null
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}