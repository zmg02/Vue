import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(VueRouter)

/*
    promise错误处理
    重写VueRouter.prototype原型对象身上的push|replace方法
    先把VueRouter.prototype身上的push|replace方法进行保存
*/
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
/*
重写VueRouter.prototype身上的push方法
第一个参数：路由跳转的配置对象（query|params）
第二个参数：undefined|箭头函数（成功的回调）
第三个参数：undefined|箭头函数（失败的回调）
*/
VueRouter.prototype.push = function(location, resolve, reject){
    //push方法传递了成功和失败的回调
    if (resolve && reject) {
        //call js方法，当前对象this使用originPush方法
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, ()=>{}, ()=>{});
    }
}
/*
call方法与apply方法的区别
call方法分别接受参数
apply方法接受数组参数
*/
VueRouter.prototype.replace = function(location, resolve, reject){
    if (resolve && reject) {
        originReplace.apply(this, [location, resolve, reject]);
    } else {
        originReplace.apply(this, [location, ()=>{}, ()=>{}]);
    }
}

export default new VueRouter({
    routes:[
        {
            path: '/home',
            component: Home
        },
        {
            name: 'search',
            path: '/search/:keywords?',
            component: Search,
            props($router){
                return {
                    keywords: $router.params.keywords,
                    k: $router.query.k
                }
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        //路由跳转
        {
            path: '/',
            redirect: '/home'
        }
    ]
})