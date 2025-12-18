import React from 'react'
import { useSelector } from 'react-redux'

export const Advantages = () => {

    const home = useSelector((state) => state.homeData.home);
    const advantages = home?.acf?.advantages;

    if(!advantages) return null;

    

  return (
    <>
    
    <section className='py-[50px] md:py-[65px] lg:py-20'>
        <div className="container">
            <div className='w-full max-w-[1340px] mx-auto flex flex-wrap gap-y-[15px] md:gap-y-20 relative before:hidden md:before:inline-block before:content-[""] before:absolute before:left-0 before:top-[50%] before:w-full before:h-px before:bg-[#0000001A]'>
                {
                    advantages.map((item, index) => {
                        return (
                            <div key={index} className='w-full md:w-[33.33%] p-2.5'>
                                <div className='flex  items-center justify-center max-w-[247px] mx-auto'>
                                    <div className='w-20'>
                                        <img src={item.icon} alt={item.title} />
                                    </div>
                                    <h3 className='flex-1 pl-2.5 text-[18px] md:text-[20px] font-medium leading-[1.1]'>{item.title}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
    
    </>
  )
}
