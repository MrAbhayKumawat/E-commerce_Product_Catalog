interface SortDropdownProps {
  sortBy: 'price' | 'rating'
  setSortBy: (sortBy: 'price' | 'rating') => void
}

export default function SortDropdown({ sortBy, setSortBy }: SortDropdownProps) {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value as 'price' | 'rating')}
      className="mt-2 sm:mt-0 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <option value="price">Sort by Price</option>
      <option value="rating">Sort by Rating</option>
    </select>
  )
}

