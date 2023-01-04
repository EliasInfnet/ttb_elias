import React, { useEffect, useState } from 'react'
import ProductListItem from './ProductListItem'
import './product.css'

function ProductList({products}) {

  return (
    <div className='list'>
      {products.map(p => (
        <ProductListItem key={p.id} product={p} />
      ))}
    </div>
  )
}

export default ProductList