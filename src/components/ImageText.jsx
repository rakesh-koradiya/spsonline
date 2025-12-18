import React from 'react'
import { useSelector } from 'react-redux'


export const ImageText = ({block}) => {

      const home = useSelector((state) => state.homeData.home);
      const imgText = home?.acf?.[block];
      if(!imgText) return null;
      

  return (
    <>
        <section className='py-[50px] md:py-[65px] lg:py-20 bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${imgText.background_image})`}}>
            <div className="container">
                <div className={`w-full max-w-full md:max-w-[750px] ${imgText.text_position == 'right' ? 'ml-auto mr-[30px]' : 'ml-[0] md:ml-[30px]'} p-5 md:p-8 rounded-2xl md:rounded-4xl backdrop-blur-sm bg-[#0000003D]`}>
                    <div>
                        <h2 className='text-white text-[30px] md:text-[34px] lg:text-[40px] leading-[1.2] font-bold mb-2'>{imgText.title}</h2>
                            <div className='text-white text-[18px] leading-[1.3]' dangerouslySetInnerHTML={{__html: imgText.description}} />

                
                            { imgText.list_info ? 
                            <ul className='mt-2'>
                                {
                                    imgText.list_info.map((item, index) => {
                                        return (
                                        <li key={index} className='flex flex-wrap items-start gap-3 py-2.5'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><g clipPath="url(#clip0_213_948)"><path d="M12.0003 0.857422C9.79644 0.857422 7.64208 1.51094 5.80964 2.73533C3.97721 3.95972 2.549 5.7 1.70563 7.73609C0.86225 9.77218 0.641584 12.0126 1.07153 14.1741C1.50148 16.3356 2.56274 18.3211 4.12109 19.8795C5.67945 21.4378 7.66492 22.4991 9.82642 22.929C11.9879 23.359 14.2284 23.1383 16.2645 22.2949C18.3006 21.4516 20.0408 20.0234 21.2652 18.1909C22.4896 16.3585 23.1431 14.2041 23.1431 12.0003C23.14 9.04597 21.965 6.21355 19.876 4.12453C17.787 2.03552 14.9546 0.860542 12.0003 0.857422ZM16.8924 10.0353L10.8924 16.0353C10.8128 16.115 10.7183 16.1782 10.6142 16.2213C10.5102 16.2645 10.3986 16.2867 10.286 16.2867C10.1734 16.2867 10.0618 16.2645 9.95776 16.2213C9.85371 16.1782 9.75918 16.115 9.67957 16.0353L7.10814 13.4639C6.94731 13.303 6.85695 13.0849 6.85695 12.8574C6.85695 12.63 6.94731 12.4118 7.10814 12.251C7.26898 12.0902 7.48711 11.9998 7.71457 11.9998C7.94202 11.9998 8.16016 12.0902 8.321 12.251L10.286 14.2171L15.6796 8.82242C15.7592 8.74278 15.8538 8.67961 15.9578 8.63651C16.0619 8.59341 16.1734 8.57123 16.286 8.57123C16.3986 8.57123 16.5101 8.59341 16.6142 8.63651C16.7182 8.67961 16.8128 8.74278 16.8924 8.82242C16.9721 8.90206 17.0352 8.9966 17.0783 9.10065C17.1214 9.20471 17.1436 9.31623 17.1436 9.42885C17.1436 9.54147 17.1214 9.653 17.0783 9.75705C17.0352 9.8611 16.9721 9.95564 16.8924 10.0353Z" fill="inherit"></path></g><defs><clipPath id="clip0_213_948"><rect width="24" height="24" fill="inherit"></rect></clipPath></defs></svg>
                                            </span>
                                            <span className='flex-1 text-white text-[18px] leading-[1.2] inline-block'>{item.item}</span>
                                        </li>
                                        )
                                    })
                                }
                            </ul> : ''
                            }

                            { imgText.process ? 
                                
                                <ul className='mt-[15px] [&_li:not(:last-child)]:mb-[15px] relative before:content-[""] before:w-[5px] before:h-[calc(100%-10px)] before:rounded-full before:bg-[#363636] before:absolute before:left-[9px] before:top-0'>
                                    {
                                        imgText.process.map((item, index) => {
                                            return(
                                                <li key={index} className='flex flex-wrap items-start gap-3 z-2 relative'>
                                                     <span className=''>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><g clipPath="url(#clip0_213_948)"><path d="M12.0003 0.857422C9.79644 0.857422 7.64208 1.51094 5.80964 2.73533C3.97721 3.95972 2.549 5.7 1.70563 7.73609C0.86225 9.77218 0.641584 12.0126 1.07153 14.1741C1.50148 16.3356 2.56274 18.3211 4.12109 19.8795C5.67945 21.4378 7.66492 22.4991 9.82642 22.929C11.9879 23.359 14.2284 23.1383 16.2645 22.2949C18.3006 21.4516 20.0408 20.0234 21.2652 18.1909C22.4896 16.3585 23.1431 14.2041 23.1431 12.0003C23.14 9.04597 21.965 6.21355 19.876 4.12453C17.787 2.03552 14.9546 0.860542 12.0003 0.857422ZM16.8924 10.0353L10.8924 16.0353C10.8128 16.115 10.7183 16.1782 10.6142 16.2213C10.5102 16.2645 10.3986 16.2867 10.286 16.2867C10.1734 16.2867 10.0618 16.2645 9.95776 16.2213C9.85371 16.1782 9.75918 16.115 9.67957 16.0353L7.10814 13.4639C6.94731 13.303 6.85695 13.0849 6.85695 12.8574C6.85695 12.63 6.94731 12.4118 7.10814 12.251C7.26898 12.0902 7.48711 11.9998 7.71457 11.9998C7.94202 11.9998 8.16016 12.0902 8.321 12.251L10.286 14.2171L15.6796 8.82242C15.7592 8.74278 15.8538 8.67961 15.9578 8.63651C16.0619 8.59341 16.1734 8.57123 16.286 8.57123C16.3986 8.57123 16.5101 8.59341 16.6142 8.63651C16.7182 8.67961 16.8128 8.74278 16.8924 8.82242C16.9721 8.90206 17.0352 8.9966 17.0783 9.10065C17.1214 9.20471 17.1436 9.31623 17.1436 9.42885C17.1436 9.54147 17.1214 9.653 17.0783 9.75705C17.0352 9.8611 16.9721 9.95564 16.8924 10.0353Z" fill="inherit"></path></g><defs><clipPath id="clip0_213_948"><rect width="24" height="24" fill="inherit"></rect></clipPath></defs></svg>
                                                    </span>
                                                    <div className='flex-1'>
                                                        <h3 className='text-white text-[20px] md:text-[24px] font-semibold leading-[1.2] mb-[5px]'>Step {index+1}: {item.step_title}</h3>
                                                        <p className='text-white text-[18px]'>{item.step_description}</p>
                                                    </div>
                                                </li>
                                                
                                            )
                                        })
                                    }

                                </ul>
                                :''
                            }

                            
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
