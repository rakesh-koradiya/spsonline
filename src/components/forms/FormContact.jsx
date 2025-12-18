import React from 'react'

export const FormContact = () => {
  return (
    <>

    <label htmlFor="name" className="mb-2 text-[16px] text-black font-normal"> Name* </label>
     <input
       id="name"
       type="text"
       placeholder="Enter Your Full Name"
       className="flex items-center w-full py-2.5 px-4 mb-4 text-[14px] font-normal outline-none focus:border-(--secondary-color) placeholder:text-[#a3a3a3] border border-black rounded-[10px]"
     />

     <label htmlFor="email" className="mb-2 text-[16px] text-black font-normal"> Email* </label>
      <input
        id="email"
        type="email"
        placeholder="mail@loopple.com"
        className="flex items-center w-full py-2.5 px-4 mb-4 text-[14px] font-normal outline-none focus:border-(--secondary-color)  placeholder:text-[#a3a3a3] border border-black rounded-[10px]"
      />

    <label htmlFor="subject" className="mb-2 text-[16px] text-black font-normal"> Subject* </label>
     <input
       id="subject"
       type="text"
       placeholder="Subject"
       className="flex items-center w-full py-2.5 px-4 mb-4 text-[14px] font-normal outline-none focus:border-(--secondary-color) placeholder:text-[#a3a3a3] border border-black rounded-[10px]"
     />

     <label htmlFor="phone" className="mb-2 text-[16px] text-black font-normal"> Phone Number* </label>
     <input
       id="phone"
       type="tel"
       placeholder="Phone Number"
       className="flex items-center w-full py-2.5 px-4 mb-4 text-[14px] font-normal outline-none focus:border-(--secondary-color) placeholder:text-[#a3a3a3] border border-black rounded-[10px]"
     />

     <label htmlFor="message" className="mb-2 text-[16px] text-black font-normal"> Message* </label>
     <input
       id="message"
       type="textarea"
       placeholder="Note / Comment"
       className="flex items-center w-full py-2.5 px-4 mb-8 text-[14px] font-normal outline-none focus:border-(--secondary-color) placeholder:text-[#a3a3a3] border border-black rounded-[10px]"
     />

    <button type="submit" className='secondary-btn transition-all duration-300 cursor-pointer'>Send Message</button>


    </>
  )
}
