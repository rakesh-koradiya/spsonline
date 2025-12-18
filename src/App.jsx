import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { fetchHomeData } from "./features/data/HomeSlice"
import { fetchSiteData } from "./features/data/SiteSettings";
import './App.css'
import PageBgImage from './assets/Images/page-bg-img.webp'
import Header from './components/Header'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { Contact } from './pages/Contact'
import { Footer } from "./components/footer/Footer";
import { Login } from "./pages/Login";
import { fetchContactData } from "./features/data/ContactSlice";
import { ProductSingle } from "./pages/ProductSingle";





function App() {

  // const dispatch = useDispatch();
  // const {home, status, error} = useSelector((state) => state.homeData );
  // const {siteSetting, status: siteStatus, error: siteError } = useSelector((state) => state.siteData)
  // const {contact, status: contactStatus, error: contactError } = useSelector((state) => state.contactData)
  // useEffect(() => {
  //     dispatch(fetchHomeData());
  //     dispatch(fetchSiteData());
  //     dispatch(fetchContactData());
  // }, [dispatch])

  // if(status === 'loading') return <p>Loading...</p>;
  // if(status === 'failed') return <p>Error: {error} </p>;


  return (
    <>
      <div className=' py-[15px] md:py-8 lg:py-16 px-[15px]'
      style={{ 
        backgroundImage:`url(${PageBgImage})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
      }}
      >
        <div className='outer-wrapper bg-white'>
          <Header/>
            <div className='px-2'>         
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/contact-us" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/product/:id" element={<ProductSingle/>}/>
              </Routes>
            </div>
            <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
