import React from 'react'
import './product.css'

function ProductListItem({ product }) {
  return (
    <div className='item'>
      <h4 className='item_title'>{product.name}</h4>
      <img className='item_image' src={product.images[0].asset.url} alt={product.images[0].alt} />
      <p className='item_category'> {product.category.name}</p>
      <p className='item_description'> {product.shortDescription}</p>
    </div>
  )
}

export default ProductListItem