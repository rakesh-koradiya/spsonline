import React, { useState } from 'react'
import logo from '../assets/Images/superior-logo.jpg'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import { useSelector } from 'react-redux';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);    
  }

window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
        setMenuOpen(false);
    }
});

const hasLogin = useSelector((state) => state.loginUser.isAuthenticated)

console.log(hasLogin);


  return (
    <>
    
    <header className='py-[15px] px-0 lg:py-[30px] lg:px-[15px] xl:py-[33px] xl:px-[50px] bg-white sticky left-0 top-0 z-10'>
        <div className="container flex gap-5 justify-between items-center">
          <div className='w-full max-w-[150px] md:max-w-[205px] flex-1 md:flex-auto'>
            <img src={logo} alt="" />
          </div>
             
          <div className={ menuOpen === false ? 'hidden lg:inline-block' : 'fixed p-5 w-full max-w-[80%] left-0 top-0 bg-white z-3 h-full [&_ul]:gap-y-0! [&_a]:text-[18px]! [&_a]:p-2.5 [&_a]:w-full [&_a]:inline-block [&_a]:leading-none [&_a]:font-normal!' } >
            
              <div className='inline-block lg:hidden w-full' onClick={menuToggle}>
                  <svg xmlns="http://www.w3.org/2000/svg" className='ml-auto' width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                            <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
                  </svg>
              </div>

              <ul className='flex items-center flex-wrap gap-12 [&_li]:w-full lg:[&_li]:w-auto! [&_a]:text-black [&_a]:text-[20px] font-semibold leading-[30px] [&_a]:hover:text-(--secondary-color)'
              >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Products</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
          </div>

          <div className='flex flex-wrap items-center gap-[15px]'>
              
              <Button text={!hasLogin ? 'Login' : 'Account'} url={!hasLogin? '/login' : '/account'} style="primary-btn hidden! md:inline-block!"/>
              <Button text={!hasLogin ? 'Register' : 'Logout'} url="/register" style="secondary-btn hidden! md:inline-block!"/>
            

              <Link to={!hasLogin? '/login' : '/account'} className='inline-block md:hidden'>
                <svg className="thebase-svg-icon thebase-account-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 473.76 512"><path d="M-521.65,315.76h23c4.42.72,8.87,1.25,13.24,2.19,55.07,11.81,92.37,44.35,107,98.61,14.77,54.64-1,101.86-43.29,139.84-4,3.62-8.54,6.7-13.29,10.39,1.95.77,3.43,1.38,4.92,1.94,77.59,28.78,129.13,82.57,153.78,161.52,12.83,41.09-11.38,83.65-52.87,94.91-3.49,1-7,1.74-10.53,2.6h-339a30.82,30.82,0,0,0-3.32-.9c-44.47-6.71-74.3-50.73-61.69-93.78,23.54-80.43,75.67-134.82,154-164.24,1.64-.61,3.3-1.17,5.57-2-1.72-1.32-2.74-2.11-3.78-2.89-46.41-34.92-66.4-81.42-55.21-138.3,10.94-55.62,46.34-90.65,101-105.9C-535.42,317.92-528.47,317.08-521.65,315.76Zm11.94,477.93q79.75,0,159.5,0c30.23,0,49.53-26.41,40.82-55.42C-340.16,635.82-444.12,571.85-548,593c-82.66,16.83-136.72,67.24-162.34,147.61-2.07,6.46-1.85,14.35-.43,21.1,4.07,19.34,20.79,31.92,41.1,31.95Q-589.7,793.77-509.71,793.69Zm-.05-443.48A102.15,102.15,0,0,0-611.87,452.76a102.18,102.18,0,0,0,102.61,102A102.09,102.09,0,0,0-407.41,452.53,102.19,102.19,0,0,0-509.76,350.21Z" transform="translate(746.57 -315.76)"></path></svg>
              </Link>
              <div className="leading-0 pr-2.5 pl-5 relative before:content-[''] before:absolute before:left-0 before:w-[5px] before:h-[35px] before:-top-1 before:bg-[#3333331a] ">
                  <Link to="/cart" className='  [&:hover_svg]:text-(--secondary-color) [&_.cart-counter]:bg-(--secondary-color) [&:hover_.cart-counter]:bg-black!'>
                      <span className='inline-block relative'>
                          <svg className='w-7 h-7' fill="currentColor" width="25" height="25" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510.91 511.52"><path d="M2478.13,165.41c6.43,1.5,13,2.49,19.27,4.59,34.54,11.64,56.2,35.43,65.39,70.59,4.16,15.91,8.21,31.85,11.86,47.88,1,4.33,2.74,5.38,6.94,5.38q180.91-.18,361.82-.09c1.83,0,3.66-.05,5.49,0,10.93.47,17.23,8.73,14.59,19.43q-11.77,47.64-23.74,95.25-6.33,25.38-12.64,50.77c-9,35.85-35.68,56.77-72.63,56.81q-77.59.08-155.21,0c-15.13,0-30.28-.18-45.41.06-18.8.29-30.43,15.93-25,33.19,3.42,10.84,12.66,17.08,25.86,17.14,19.3.09,38.6,0,57.89,0q65.13,0,130.26,0c27.55,0,48.41,15,54.68,39.92,5.54,22.05.93,42.1-16.9,57-17.18,14.3-37.26,17.66-57.92,8.3-21.16-9.58-32.05-27.11-32.67-50.15-.22-8.21,2.65-16.49,4.13-24.84H2718c7.22,15.45,7.76,30.78,1.14,46.14A54.63,54.63,0,0,1,2630.43,661c-14.95-14.7-25.72-43.84-6.37-72.46-14.89-9.41-23.77-23-25.9-40.44s2.74-32.92,15.45-45.79c-3.18-3-6.42-5.82-9.35-8.91-9.76-10.32-15-22.87-18.35-36.51Q2560,352.43,2533.8,248c-7.94-31.68-32.46-51.5-65-52.61-7.86-.27-12.33-4.68-15.63-11.05v-8a22.92,22.92,0,0,1,11-11ZM2583.91,324c.28,1.49.43,2.61.7,3.71q15.7,63.08,31.46,126.15c5,20.06,20.51,32.16,41.35,32.19q99.27.14,198.55,0c21.22,0,36.35-11.87,41.56-32.46q14-55.53,27.84-111.13c1.51-6,3-12.1,4.53-18.46Zm59.71,297.09c0,14.47,10.75,25.37,25,25.34a25,25,0,1,0-25-25.34Zm201.23-24.67a25,25,0,1,0,25.33,24.7C2870.2,607.57,2858.72,596.38,2844.85,596.45Z" transform="translate(-2453.18 -165.41)"></path></svg>
                          <span className='cart-counter absolute -right-2.5 -top-1 w-[18px] h-[18px]  flex items-center justify-center rounded-full text-[11px] text-white leading-0'>0</span>
                      </span>
                  </Link>
              </div>
              <div className='inline-block lg:hidden' onClick={menuToggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                        <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                      </svg> 
              </div>
          </div>
        </div>
    </header>
    
    </>
  )
}

export default Header