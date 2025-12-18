import React from 'react'
import { Link } from 'react-router-dom'
import {Email} from '../icons/Email'

export const IconEmail = (props) => {
  return (
    <Link to={`mailto:${props.email}`} className='flex items-center gap-2 hover:text-(--secondary-color)'>
        <span>
            <Email/>
        </span>
        <span className='text-[18px] font-normal leading-none'>{props.email}</span>
    </Link>
  )
}
