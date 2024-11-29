'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'
import Pagination from './Pagination'
import SortDropdown from './SortDropdown'
import { Product } from '@/types'

export default function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('price')
  const productsPerPage = 8

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setFilteredProducts(data)
      })
  }, [])

  useEffect(() => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price
      } else {
        return b.rating.rate - a.rating.rate
      }
    })
    setFilteredProducts(sorted)
    setCurrentPage(1)
  }, [searchTerm, sortBy, products])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div>
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

