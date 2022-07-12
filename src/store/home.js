import { reqGetCategoryList, reqGetFloorList, reqGetBannerList } from "@/api"
const actions = {
    async getCategoryList(context) {
        let result = await reqGetCategoryList();
        if (result.code == 200) {
            context.commit("GETCATEGORYLIST", result.data)
        }
    },
    async getFloorList(context) {
        let result = await reqGetFloorList();
        if (result.code == 200) {
            context.commit('GETFLOORLIST', result.data)
        }
    },
    async getBannerList(context) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            context.commit('GETBANNERLIST', result.data)
        }
    }
}
const mutations = {
    GETCATEGORYLIST(state, value) {
        state.categoryList = value
    },
    GETFLOORLIST(state, value) {
        state.floorList = value
    },
    GETBANNERLIST(state, value) {
        state.bannerList = value
    }
}
const state = {
    //三级分类数据
    categoryList: [],
    //floor数据
    floorList: [],
    //banner数据
    bannerList: [],
}
const getters = {}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters,
}