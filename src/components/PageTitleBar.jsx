import React from 'react'

export const PageTitleBar = (props) => {
  return (
    <>
    
    <div className='bg-(--secondary-color) py-10'>
        <h1 className='text-center text-[24px] md:text-[28px] font-medium leading-[1.2]'>{props.title}</h1>
    </div>
    
    </>
  )
}
