import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


export const ProductSingle = () => {

    const { id } = useParams();
    const { shop } = useSelector((state) => state.shopData)
    const productList = shop.products;
    const product = productList.find((item) => item.id == id )

    console.log(product);

    if(!product) return null;

    const productMediaSlider = {
    dots: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    }


  return (
   <>
   
   <section className='py-[50px] md:py-[65px] lg:py-20'>
        <div className="container flex flex-wrap">
            <div className='w-[40%]'>
                <div className="flex flex-col gap-2">
                 <Slider {...productMediaSlider}>
                    {
                        product.images.map((item) => {
                            return (
                                <div>
                                    <img key={item.id} src={item} alt={product.title} className='w-full'/>
                                </div>
                            )
                        })
                    }
                  </Slider>
                </div>
              
            </div>
            <div className='w-[60%] pl-[25px] md:pl-[50px]'>
                <h3 className="text-lg sm:text-[30px] font-semibold text-slate-900"> {product.title} </h3>
              <p className="text-slate-500 mt-2 text-sm">
               {product.description}
              </p>
              <div className="flex items-center flex-wrap gap-4 mt-6">
                <h4 className="text-slate-900 text-2xl sm:text-3xl font-semibold">${product.price}</h4>
                <p className="text-slate-500 text-lg">
                  <span className="text-sm ml-1.5">Tax included</span>
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-lg px-2.5 bg-yellow-600 text-white rounded-full">
                  <p>{product.rating}</p>
                  <svg className="w-[13px] h-[13px] fill-white" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>


            <div>
              <div className="mt-6 flex flex-wrap gap-4">
                <button type="button" className="secondary-btn w-full text-center transition-all duration-300 cursor-pointer">Add to cart</button>
              </div>
            </div>


            <hr className="my-6 border-slate-300" />

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Product Information</h3>
              <div className="mt-4" role="accordion">
                <div className="hover:bg-slate-100 transition-all">
                  <button type="button" className="w-full text-sm font-semibold cursor-pointer text-left px-4 py-2.5 text-slate-900 flex items-center">
                    <span className="mr-4">Product details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-180" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="pb-4 px-4">
                    <p className="text-sm text-slate-500 leading-relaxed"> {product.description}</p>
                  </div>
                </div>

                <div className="hover:bg-slate-100 transition-all">
                  <button type="button" className="w-full text-sm font-semibold cursor-pointer text-left px-4 py-2.5 text-slate-900 flex items-center">
                    <span className="mr-4">Vendor details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="pb-4 px-4">
                    <p className="text-sm text-slate-500 leading-relaxed">Brand: {product.brand}</p>
                  </div>
                </div>

                <div className="hover:bg-slate-100 transition-all">
                  <button type="button" className="w-full text-sm font-semibold cursor-pointer text-left px-4 py-2.5 text-slate-900 flex items-center">
                    <span className="mr-4">Shipping And Warranty Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="pb-4 px-4">
                    <p className="text-sm text-slate-500 leading-relaxed">{product.shippingInformation} </p>
                    <p className="text-sm text-slate-500 leading-relaxed">{product.warrantyInformation} </p>
                  </div>
                </div>
              </div>
            </div>

            </div>
        </div>
   </section>
   
   </>
  )
}


