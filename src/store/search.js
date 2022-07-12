import { reqPostSearchList } from '@/api'
const actions = {
    async postSearchList(context, value={}) {
        let result = await reqPostSearchList(value);
        if (result.code == 200) {
            context.commit('POSTSEARCHLIST', result.data);
        }
    },
}
const mutations = {
    POSTSEARCHLIST(state, value) {
        state.searchList = value
    }
}
const state = {
    searchList: {}
}
const getters = {
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    },

}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters,
}