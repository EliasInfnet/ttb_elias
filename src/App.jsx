import './App.css'
import productsJSON from './data/products.json'
import { useEffect, useMemo, useState } from 'react'
import ProductList from './components/ProductList'

function App() {

  const [activeCategoryID, setActiveCategoryID] = useState()
  const existingCategories = useMemo(() => {
    return [...new Map(
      productsJSON.data.nodes.map(product => {
        return [product['category']['_id'], product['category']]
      })).values()
    ]
  }, [])

  const products = useMemo(() => {
    if (!activeCategoryID) return productsJSON.data.nodes
    return productsJSON.data.nodes.filter(p => p.category._id === activeCategoryID)
  }, [activeCategoryID])

  return (
    <div className="App">
      <div className='menu'>
        {existingCategories.map(category => (
          <button
            key={category._id}
            onClick={() => setActiveCategoryID(() => category._id)}
          >
            {category.name}
          </button>

        ))}
      </div>

      <ProductList products={products} />
    </div>
  )
}

export default App