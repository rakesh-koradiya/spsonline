import React from 'react'
import { useSelector } from 'react-redux';


export const USP = () => {

    const home = useSelector((state) => state.homeData.home);
    const usps = home?.acf?.usps?.usp_list;
    if (!usps) return null;
        
  return (
    <>
    
    <section className='py-[50px] md:py-[65px] lg:py-20'>
        <div className="container">
            <div className='w-full max-w-[1140px] mx-auto flex flex-wrap gap-8 '>
                {
                    usps.map((item, index) => {
                        return (
                            <div key={index} className='p-6 md:p-8 border border-solid border-[#0000001A] rounded-4xl w-full md:w-[calc(50%-16px)] text-center'>
                                <div className='flex justify-center mb-[5px]'>
                                    <img src={item.usp_icon} alt={item.usp_title} />
                                </div>
                                <h3 className='mb-[5px] text-[21px] font-semibold leading-9 text-[#333] lg:text-[24px]'>{item.usp_title}</h3>
                                <p className='text-[16px] leading-5 text-[#777777] tracking-[0.3px]'>{item.usp_description}</p>
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
