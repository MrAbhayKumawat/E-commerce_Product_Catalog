'use client'

import dynamic from 'next/dynamic'

const DynamicProductCatalog = dynamic(() => import('./ProductCatalog'), {
  ssr: false,
})

export default function ProductCatalogWrapper() {
  return <DynamicProductCatalog />
}

