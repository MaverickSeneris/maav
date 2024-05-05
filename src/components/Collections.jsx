import React from 'react'
import { Link } from 'react-router-dom'


export default function Collections() {
  return (
    <div className='collections'>
      <div className='category-wrapper'><Link to='women'>
        <img src="https://cms.brnstc.de/product_images/2244x3072p/cpro/media/images/product/24/1/100150510218500_4_1706449958606.webp" />
        <div className='category-women'>WOMEN</div>
      </Link>

      </div>

      <div className='category-wrapper'>
        <Link  to='men'>
          <img src="https://cms.brnstc.de/product_images/2244x3072p/cpro/media/images/product/24/1/100150510715000_4_1706453930017.webp0" />
          <div className='category-men'>MEN</div>
        </Link>
      </div>
    </div>
  )
}
