import React, { useEffect } from 'react'
import { PageTitleBar } from '../components/PageTitleBar'
import { ProductList } from '../components/product/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/data/ShopSlice';

export const Shop = () => {

const dispatch = useDispatch();

const {shop, status, error} = useSelector((state) => {return state.shopData});

useEffect(() => {
  if(status === 'idle'){
    dispatch(fetchProducts());
  }
},[dispatch, status])

if(status === 'loading') return <p>Loading...</p>
if(status === 'failed') return <p>Error : {error}</p>

const products = shop.products;
if(!products) return null;


  return (
    <>
    <PageTitleBar title="Shop"/>
    <ProductList data={products}/>
    </>
  )
}
