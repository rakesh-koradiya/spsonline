import React from 'react'
import { Link } from 'react-router-dom'

export const Button = (props) => {
  return (
    <Link className={props.style} to={props.url}>{props.text}</Link>
  )
}
