import axios from 'axios'
//引入进度条 start方法：进度条开始 done方法：进度条结束
import nprogress from 'nprogress'
//引入进度条相应样式
import "nprogress/nprogress.css"
//临时用户token
import store from '@/store'


let requests = axios.create({
    //基础路径
    baseURL: "/api",
    //请求超时时间
    timeout: 5000
});

//请求拦截器--------发请求（请求还没有发出）可以处理一些事情
requests.interceptors.request.use((config) => {
    //config:配置对象
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    if (store.state.detail.userToken) {
        //给请求头加入（userTempId）
        config.headers.userTempId = store.state.detail.userToken;
    }
    //进度条开始
    nprogress.start();
    return config;
});

//响应拦截器--------服务器收到请求后，做出响应会执行的
requests.interceptors.response.use(
    (res) => {
        //进度条结束
        nprogress.done();
        return res.data;
    },
    (err) => {
        alert("服务器响应数据失败")
    }
)


export default requests;