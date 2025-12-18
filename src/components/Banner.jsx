import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Button } from './Button'

export const Banner = () => {

  const home = useSelector((state) => state.homeData.home);
  const banner = home?.acf?.hero_section;

  if (!banner) return null;

    

  return (
    <>
    
    <section className='relative h-[450px] lg:h-[600px] overflow-hidden'>
        <div className='before:absolute before:w-full before:h-full before:bg-black before:opacity-25 before:left-0 before:top-0 before:z-1'>
            {banner.hero_background === 'Video' ? 
                <video autoPlay >
                    <source src={banner.background_video} type="video/mp4" />
                </video> :
                <img src={banner.background_image} className='h-full w-full object-cover absolute left-0 top-0'/>
            }
        </div>

        <div className="container absolute top-[50%] left-[50%] w-full -translate-[50%] py-[100px] z-2">
            <div className='text-center'>
                <h1 className='heading-h1 text-white mb-5 md:mb-10 '>{ home?.acf?.hero_section.hero_title}</h1>
                <p className='text-[24px] text-white font-medium leading-[1.2] mb-4'>{banner.hero_description}</p>
                <Button text="Order Now" url="/shop" style="secondary-btn"/>
            </div>
        </div>
    </section>
    
    </>
  )
}
