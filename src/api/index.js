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
// 搜索页返回数据
export const reqPostSearchList = (params) => requests({ 'url': '/list', 'method': 'post', data: params });
// 详情页商品信息
export const reqGetGoodsInfo = (goodsId) => requests({ 'url': `/item/${goodsId}`, 'method': 'get' });
// 加入购物车或修改商品数量
export const reqAddToCart = (goodsId, goodsNum) => requests({ 'url': `/cart/addToCart/${goodsId}/${goodsNum}`, 'method': 'post' });
// 获取购物车数据
export const reqShopCart = () => requests({ 'url': '/cart/cartList', 'method': 'get' });
// 删除购物车数据
export const reqDelShopCart = (goodsId) => requests({ 'url': `/cart/deleteCart/${goodsId}`, 'method': 'delete' });
// 修改购物车数据是否选中
export const reqUpdateChecked = (goodsId, isChecked) => requests({ 'url': `/cart/checkCart/${goodsId}/${isChecked}`, 'method': 'get' });
// 获取注册验证码
export const reqGetRegisterCode = (phone) => requests({ 'url': `/user/passport/sendCode/${phone}`, 'method': 'get' });
// 注册
export const reqPostRegister = (data) => requests({ 'url': `/user/passport/register`, data, 'method': 'post' });
// 登录
export const reqPostLogin = (data) => requests({ 'url': `/user/passport/login`, data, 'method': 'post' });
// 获取用户信息
export const reqGetUserInfo = () => requests({ 'url': `/user/passport/auth/getUserInfo`, 'method': 'get' });
// 退出登录
export const reqLogout = () => requests({ 'url': `/user/passport/logout`, 'method': 'get' });
// 获取用户地址信息
export const reqUserAddressList = () => requests({ 'url': `/user/userAddress/auth/findUserAddressList`, 'method': 'get' });
// 获取商品清单
export const reqGetTradeOrder = () => requests({ 'url': `/order/auth/trade`, 'method': 'get' });
// 提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({ 'url': `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, 'method': 'post' });