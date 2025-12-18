import React from 'react'
import { Clock } from '../icons/Clock'

export const WorkingHours = (props) => {
  return (
    <>
    
    <div className='flex items-center gap-2'>
        <span>
            <Clock/>
        </span>
        <span className='text-[16px] font-normal leading-none'>{props.hours}</span>
    </div>
    
    </>
  )
}
