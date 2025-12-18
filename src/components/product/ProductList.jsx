import React from 'react'
import { ProductCard } from './ProductCard'

export const ProductList = ({data}) => {

    
    
  return (
   <>
    <section className='py-[50px] md:py-[65px] lg:py-20'>
        <div className="container">
            <ul className='flex flex-wrap gap-5 border border-[#0000001A] p-[15px]'>
                {
                    data.map((item) => {
                        return(
                            <li key={item.id}  className='w-[calc(50%-10px)] md:w-[calc(33.33%-14px)] lg:w-[calc(25%-15px)]'>
                                <ProductCard product={item}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
   </>
  )
}
