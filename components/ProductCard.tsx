import Image from 'next/image'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">{product.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">${product.price.toFixed(2)}</p>
        <div className="flex items-center">
          <span className="text-yellow-400 mr-1">★</span>
          <span className="text-gray-600 dark:text-gray-300">{product.rating.rate.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}

