import React, { useEffect, useState } from 'react'
import { LoginForm } from '../components/login/LoginForm'
import { fetchUserData } from '../features/data/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {

const dispatch = useDispatch();

const {user, status, error } = useSelector((state) => state.userData )

useEffect( () => {
  if(status === 'idle'){
    dispatch(fetchUserData())
  }
},[dispatch, status])



if(status === 'loading') return <p>Loading...</p>
if(status === 'failed') return <p>Error: {error}</p>

if(!user) return null 

console.log(user);



  return (
    <>
    <LoginForm/>


    </>
  )
}
