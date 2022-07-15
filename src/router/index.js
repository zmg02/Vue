import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

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

const router = new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        return {y:0};
    },
});

//全局守卫：前置守卫（路由跳转之前）
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if (token) {
        //已登录
        //不能路由到登录注册页
        if (to.path=='/login' || to.path=='/register') {
            next('/');
        } else {
            //判断是否有用户信息
            if (name) {
                next();
            } else {
                //没有用户信息需要获取
                try {
                    await store.dispatch('user/getUserInfo');
                    next();
                } catch (error) {
                    //token过期，退出登录
                    await store.dispatch('user/logout');
                    next('/login');
                }
            }
        }
    } else {
        //未登录,过滤
        let toPath = to.path;
        if (toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1 || toPath.indexOf('/center')!=-1) {
            next('/login?redirect='+toPath);
        } else {
            next();
        }
    }
});

export default router;