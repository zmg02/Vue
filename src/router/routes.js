import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'

export default [
    {
        path: '/home',
        component: Home,
        meta: {isShow:true},
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta: {isShow:true},
        props($router){
            return {
                keyword: $router.params.keyword,
                k: $router.query.k
            }
        }
    },
    {
        path: '/detail/:goodsId',
        component: Detail,
        meta: {isShow:true},
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        name: 'addcartsuccess',
        path: '/addCartSuccess',
        component: AddCartSuccess,
        meta: {isShow:true},
    },
    {
        name: 'shopcart',
        path: '/shopCart',
        component: ShopCart,
        meta: {isShow:true},
    },
    {
        path: '/trade',
        component: Trade,
        meta: {isShow:true},
    },
    {
        path: '/pay',
        component: Pay,
        meta: {isShow:true},
    },
    //路由跳转
    {
        path: '/',
        redirect: '/home'
    }
]