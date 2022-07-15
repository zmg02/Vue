//一级路由
// import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//二级路由
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'

/**
 * 路由懒加载
 * 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
 * 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。
 */
const Home = () => import('@/pages/Home');

export default [
    {
        path: '/home',
        component: Home,
        meta: {isShow:true},
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
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
        component: () => import('@/pages/Detail'),
        meta: {isShow:true},
    },
    {
        path: '/login',
        component: () => import('@/pages/Login'),
    },
    {
        path: '/register',
        component: () => import('@/pages/Register'),
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: {isShow:true},
    },
    {
        name: 'shopcart',
        path: '/shopcart',
        component: () => import('@/pages/ShopCart'),
        meta: {isShow:true},
    },
    {
        path: '/trade',
        component: () => import('@/pages/Trade'),
        meta: {isShow:true},
        //路由守卫,刷新from.path=/
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next();
            } else {
                next(false);
            }
        }
    },
    {
        path: '/pay',
        component: () => import('@/pages/Pay'),
        meta: {isShow:true},
        //路由守卫,刷新from.path=/
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next();
            } else {
                next(false);
            }
        }
    },
    {
        path: '/paysuccess',
        component: () => import('@/pages/PaySuccess'),
        meta: {isShow:true},
    },
    {
        path: '/center',
        component: () => import('@/pages/Center'),
        meta: {isShow:true},
        children: [
            {
                path: 'myorder',
                component: () => import('@/pages/Center/MyOrder'),
            },
            {
                path: 'grouporder',
                component: () => import('@/pages/Center/GroupOrder'),
            },
            // /center路由跳转到/center/myorder
            {
                path: '',
                redirect: 'myorder',
            }
        ],
    },
    {
        path: '/communication',
        component: () => import('@/pages/Communication/Communication'),
        children: [
          {
            path: 'event',
            component: () => import('@/pages/Communication/EventTest/EventTest')
          },
          {
            path: 'model',
            component: () => import('@/pages/Communication/ModelTest/ModelTest'),
          },
          {
            path: 'sync',
            component: () => import('@/pages/Communication/SyncTest/SyncTest'),
          },
          {
            path: 'attrs-listeners',
            component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
          },
          {
            path: 'children-parent',
            component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
          },
          {
            path: 'scope-slot',
            component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
          }
        ],
      },
    //路由跳转
    {
        path: '/',
        redirect: '/home'
    }
]