import Vue from 'vue';
import VueRouter from 'vue-router';

import HeroView from '@/views/HeroView';
import OurCoffeeView from '@/views/OurCoffeeView';
import GoodsPageView from '@/views/GoodsPageView';
import ContacsView from '@/views/ContacsView';
import ThanksView from '@/views/ThanksView'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: HeroView
    },
    {
        path: '/our-coffee',
        component: OurCoffeeView
    },
    {
        path: '/goods-page',
        component: GoodsPageView
    },
    {
        path: '/contacts',
        component: ContacsView
    },
    {
        path: '/thanks',
        component: ThanksView
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router