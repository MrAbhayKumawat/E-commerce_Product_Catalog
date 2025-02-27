import ProductCatalogWrapper from '@/components/ProductCatalogWrapper'

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Product Catalog</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <ProductCatalogWrapper />
        </div>
      </main>
    </div>
  )
}
