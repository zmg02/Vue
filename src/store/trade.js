import { reqUserAddressList, reqGetTradeOrder } from '@/api'

const actions = {
    async getUserAddressList({ commit }) {
        let result = await reqUserAddressList();
        if (result.code == 200) {
            commit('GETUSERADDRESSLIST', result.data);
        }
    },
    async getTradeOrder({commit}) {
        let result = await reqGetTradeOrder();
        if (result.code == 200) {
            commit('GETTRADEORDER',result.data);
        }
    },
}
const mutations = {
    GETUSERADDRESSLIST(state, value) {
        state.userAddressList = value;
    },
    GETTRADEORDER(state, value) {
        state.order = value;
    }
}
const state = {
    userAddressList: [],
    order: {},
}
const getters = {}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}