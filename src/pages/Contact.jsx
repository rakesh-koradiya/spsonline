import React, { useEffect } from 'react'
import { PageTitleBar } from '../components/PageTitleBar'
import { useDispatch, useSelector } from 'react-redux'
import  {FormContact } from '../components/forms/FormContact'
import { PhoneNumber } from '../components/footer/PhoneNumber'
import { IconEmail } from '../components/footer/IconEmail'
import { fetchContactData } from '../features/data/ContactSlice'

export const Contact = () => {
  const dispatch = useDispatch();

  const {contact, status, error} = useSelector((state)=> state.contactData)

  useEffect(()=> {
    if(status === 'idle'){
      dispatch(fetchContactData())
    }
  },[dispatch, status]);

if(status === 'loading') return <p>Loading...</p>;
if(status === 'failed') return <p>Error: {error} </p>;
  
  const data = contact?.acf;

  if(!data) return null;  

  
  return (
    <>
    
    <PageTitleBar title="Contact us"/>

    <section className='py-20'>
      <div className="container">
        <div className='flex flex-wrap gap-[50px] items-center [&>div]:w-full md:[&>div]:w-[calc(50%-25px)]'>
          <div>
            <h2 className="text-black text-[30px] md:text-[34px] lg:text-[40px] leading-[1.2] font-bold mb-2">{data.title}</h2>
            <p>{data.description}</p>
            <div className='my-5'>
              <p className='text-[20px] font-medium mb-2.5'>Call us:</p>
              <div className='flex items-center gap-[15px]'>
               <PhoneNumber number="07 3040 1102 "/>
               <PhoneNumber number="0477 388 102 "/>
            </div>

            </div>
            <div>
               <p className='text-[20px] font-medium mb-2.5'>Mail us:</p>
              <IconEmail email="sales@spsonline.com.au"/>
            </div>
           
          </div>
          <div className='p-8 rounded-[25px]' style={{boxShadow:`0px 0px 24px 0px rgba(148.99999999999997, 156.99999999999997, 164.99999999999997, 0.2)`}}>
            <FormContact/>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}
