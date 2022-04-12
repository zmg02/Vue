/*
    统一管理项目接口的模块
    引入二次封装的axios
*/
import requests from "./ajax";
import mockRequests from "./mockAjax";

/*
    三级菜单：/api/product/getBaseCategoryList  GET 没有参数
    对外暴露一个函数，只要外部调用这个函数，就向服务器发出请求。
*/
export const reqGetCategoryList = () => requests.get('/product/getBaseCategoryList');

export const reqGetFloorList = () => mockRequests.get('/floor');
export const reqGetBannerList = () => mockRequests.get('/banner');