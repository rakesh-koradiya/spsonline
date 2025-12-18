import React, { useEffect } from 'react'
import { Banner } from '../components/Banner'
import { USP } from '../components/USP'
import { ImageText } from '../components/ImageText'
import { PartnerCTA } from '../components/PartnerCTA'
import { Advantages } from '../components/Advantages'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHomeData } from '../features/data/HomeSlice'

export const Home = () => {

   const dispatch = useDispatch();
   const {home, status, error} = useSelector((state) => state.homeData );

    useEffect(() => {
      if(status === 'idle'){
        dispatch(fetchHomeData());
      } 
    }, [dispatch, status])

  if(status === 'loading') return <p>Loading...</p>
  if(status === 'failed') return <p>Error: {error}</p>

  return (
    <>
      <Banner/>
      <USP/>
      <ImageText block='trusted_supplier'/>
      <Advantages/>
      <ImageText block="getting_started"/>
      <PartnerCTA/>
      <ImageText block="our_story"/>
    
    </>
  )
}
