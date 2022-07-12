import { reqGetGoodsInfo,reqAddToCart } from '@/api'
import { getToken } from '@/utils/uuid_token'
const actions = {
    async getGoodsInfo ({commit}, goodsId) {
        let result = await reqGetGoodsInfo(goodsId);
        if (result.code == 200) {
            commit('GETGOODSINFO', result.data);
        }
    },
    async addToCart ({commit}, {goodsId, goodsNum}) {
        let result = await reqAddToCart(goodsId, goodsNum);
        if (result.code == 200) {
            return 'success';
        } else {
            return Promise.reject(new Error('Fail'));
        }
    }
}
const mutations = {
    GETGOODSINFO(state, value) {
        state.goodsInfo = value;
    }
}
const state = {
    goodsInfo: {},
    userToken: getToken(),
}

const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {};
    },
    skuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || [];
    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}
