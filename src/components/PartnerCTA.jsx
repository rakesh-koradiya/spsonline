import React from 'react'
import { useSelector } from 'react-redux'
import {Button} from '../components/Button'
import decorImg from '../assets/Images/swiming-tube.webp'

export const PartnerCTA = () => {

  const home = useSelector((state) => state.homeData.home )
  const cta = home?.acf?.partner_cta;
  if(!cta) return null;

  

  return (
    <>
    
    <section className='py-[50px] md:py-[65px] lg:py-20 bg-no-repeat bg-position-[right_center]' style={{backgroundImage:`url(${decorImg})`}}>
        <div className="container">
            <div className='text-center border border-solid border-[#0000001A] px-5 py-10 rounded-3xl w-full max-w-[824px] mx-auto'>
                <h2 className='text-[30px] md:text-[34px] lg:text-[40px] leading-[1.2] font-medium text-(--primary-color) mb-2 md:mb-6'>{cta.title}</h2>
                <p className='text-[20px] md:text-[24px] font-semibold text-black leading-[1.3] mb-[5px]'>{cta.sub_heading}</p>
                <p className='text-[18px] text-[#777777] leading-normal'>{cta.description}</p>
                <Button style="secondary-btn mt-6 bg-(--primary-color)! hover:bg-black! hover:border-black!" text="Register Now" url="/register" />
            </div>
        </div>
    </section>
    
    </>
  )
}
