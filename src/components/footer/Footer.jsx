import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { PhoneNumber } from './PhoneNumber';
import { IconEmail } from './IconEmail';
import { WorkingHours } from './WorkingHours';
import { ABN } from './ABN';
import { fetchSiteData } from '../../features/data/SiteSettings';

export const Footer = () => {

const dispatch = useDispatch();

const {site_settings, status, error} = useSelector((state) => state.siteData );

  useEffect(() => {
     if (status === "idle") dispatch(fetchSiteData());
  },[dispatch, status])

 ;
  if(status === 'loading') return <p>Loading...</p>
  if(status === 'failed') return <p>Error: {error}</p>

  const footerData = site_settings?.acf;
  
    if(!footerData) return null;

  return (
    <>
    
    { <footer className=''>
        <div className="container max-w-[1340px]!">
          <div className='pt-12 pb-[25px] flex flex-wrap items-center gap-x-2.5 gap-y-[30px]'>
              <div className='w-[250px]'>
                <Link to="/"> <img src={footerData.logo} alt='Superior Pools' className='max-w-200px'/></Link>
              </div>
              <div className='flex-auto md:flex-1 w-full flex flex-wrap justify-between gap-[15px] [&>div]:w-full md:[&>div]:w-[calc(50%-8px)] lg:[&>div]:w-[calc(33.33%-10px)]'>
                  <div className='flex flex-col gap-5'>
                    <PhoneNumber number={footerData.phone_number}/>
                    <PhoneNumber number={footerData.phone_number_2}/>
                  </div>
             
                  <div className='flex flex-col gap-5'>
                    <IconEmail email={footerData.email} />
                    <WorkingHours hours={footerData.working_hours} />
                  </div>

                  <div className='flex flex-col gap-5'>
                    <ABN abn={footerData.abn_number}/>
                  </div>

              </div>
          </div>

        <div className='py-[25px] flex flex-wrap flex-col md:flex-row justify-between items-center text-center leading-[1.1] gap-[15px] text-[16px] font-normal border-t border-solid border-[#0000001A]'>
          <div>© {new Date().getFullYear()}. Superior Pool Supplies. All Rights Reserved.</div>
          <div>Website By: Rakesh Koradiya</div>
        </div>

        </div>
    </footer> }
    
    </>
  )
}
