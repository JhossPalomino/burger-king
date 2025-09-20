import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Products } from './pages/products/products';
import { Shop } from './pages/shop/shop';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about-us',
        component: AboutUs
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'shop',
        component: Shop
    }
];
