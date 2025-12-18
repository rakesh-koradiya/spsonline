import React from 'react'
import { Link } from 'react-router-dom'
import { Phone } from '../icons/Phone'

export const PhoneNumber = (props) => {
  return (
    <Link to={`tel:${props.number.replace(/\s/g, '')}`} className='flex items-center gap-2 hover:text-(--secondary-color)'>
        <span><Phone/></span>
        <span className='text-[16px] font-normal leading-none'>{props.number}</span>
        </Link>
  )
}
