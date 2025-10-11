import { configureStore } from '@reduxjs/toolkit';
import authApi from './features/auth/authApi';
import authReducer from './features/auth/authSlice';
import productsApi from './features/products/productsApi';
import categoriesApi from './features/category/CategoriesApi';
import brandApi from './features/brand/brandApi';
import procedureApi from './features/procedure/procedure';
import sliderApi from './features/slider/sliderApi';
import blogApi from './features/blog/blogApi';
import newsletterApi from './features/newsletterApi/newsletterApi';
import singleAddressApi from './features/address/addressApi';
import hotSellingApi from './features/hotSellingApi/HotSellingApi';


export const store = configureStore({
    reducer: {
        [authApi.reducerPath] : authApi.reducer,
        auth: authReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [brandApi.reducerPath]: brandApi.reducer,
        [procedureApi.reducerPath]: procedureApi.reducer,
        [sliderApi.reducerPath]: sliderApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
        [newsletterApi.reducerPath]: newsletterApi.reducer,
        [singleAddressApi.reducerPath]: singleAddressApi.reducer,
        [hotSellingApi.reducerPath]: hotSellingApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware, categoriesApi.middleware, brandApi.middleware, procedureApi.middleware, sliderApi.middleware, blogApi.middleware, newsletterApi.middleware, singleAddressApi.middleware, hotSellingApi.middleware)
})