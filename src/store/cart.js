import { reqShopCart, reqDelShopCart, reqUpdateChecked } from '@/api'

const actions = {
    async getCartList({ commit }) {
        let result = await reqShopCart();
        if (result.code == 200) {
            commit('GETCARTLIST', result.data);
        }
    },
    async delCartItem({ commit }, goodsId) {
        let result = await reqDelShopCart(goodsId);
        if (result.code == 200) {
            return 'success';
        } else {
            return Promise.reject(new Error('fail'));
        }
    },
    async updateChecked({ commit }, { goodsId, isChecked }) {
        let result = await reqUpdateChecked(goodsId, isChecked);
        if (result.code == 200) {
            return 'success';
        } else {
            return Promise.reject(new Error('fail'));
        }
    },
    delAllCheckedGoods({ dispatch, getters }) {
        let promiseArr = [];
        getters.cartArr.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('delCartItem', item.skuId) : '';
            promiseArr.push(promise);
        });
        //只要全部的p1|p2....都成功，返回结果即为成功
        //如果有一个失败，返回即为失败结果
        return Promise.all(promiseArr);
    },
    changeIsCheckedAll({ dispatch, getters }, isChecked) {
        let promiseAll = [];
        getters.cartArr.cartInfoList.forEach(item => {
            let promise = dispatch('updateChecked', { goodsId: item.skuId, isChecked });
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
    }
}
const mutations = {
    GETCARTLIST(state, value) {
        state.cartList = value;
    }
}
const state = {
    cartList: []
}
const getters = {
    cartArr(state) {
        return state.cartList[0] || {};
    },
}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}