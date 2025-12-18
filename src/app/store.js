import { configureStore } from "@reduxjs/toolkit";
import homeReducer from '../features/data/HomeSlice';
import siteReducer from '../features/data/SiteSettings';
import contactReducer from '../features/data/ContactSlice';
import shopReducer from '../features/data/ShopSlice';
import userReducer from '../features/data/UserSlice';
import loginReducer from '../features/user/LoginUserSlice'

export const store = configureStore({
    reducer: {
        homeData: homeReducer,
        siteData: siteReducer,
        contactData: contactReducer,
        shopData: shopReducer,
        userData: userReducer,
        loginUser:loginReducer,
    }
})