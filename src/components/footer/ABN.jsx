import React from 'react'
import { File } from '../icons/File'

export const ABN = (props) => {
  return (
    <div className='flex items-center gap-2'>
        <span>
            <File/>
        </span>
        <span className='text-[16px] font-normal leading-none'>{props.abn}</span>
    </div>
  )
}
