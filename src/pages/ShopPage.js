import React, { useState } from 'react'
import SHOP_DATA from '../assets/shop-data'
import CollectionPreview from '../components/CollectionPreview'

const ShopPage = () => {
  const [ collections ] = useState(SHOP_DATA)

  return (
    <div>
      <div>ShopPage</div>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={ id }
            { ...otherCollectionProps }
          />
        ))
      }
    </div>
  )
}

export default ShopPage
