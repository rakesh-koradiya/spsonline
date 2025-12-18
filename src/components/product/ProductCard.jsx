import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const ProductCard = ({product}) => {

  return (
    <>
 
        <div>
            <div className='mb-[15px]'>
                <Link to={`/product/${product.id}`}><img src={product.thumbnail} alt={product.title} /></Link>
            </div>
            <div>
              <h3 className='text-[18px] font-normal  leading-5 text-[#333333] hover:text-(--secondary-color) mb-[5px]'><Link to={`/product/${product.id}`}>{product.title}</Link></h3>
              <p className='text-[20px] text-black mb-2.5'>${product.price}</p>
              <Button text="Add to Cart" url="/" style="w-full text-[15px]! secondary-btn py-2.5! leading-[16px]! text-center "/>
            </div>
        </div>
      
   
    </>
  )
}
