import { reqGetRegisterCode, reqPostRegister, reqPostLogin, reqGetUserInfo,reqLogout } from '@/api'
import { setToken,getToken,removeToken } from '@/utils/token';

const actions = {
    async getRegisterCode({ commit }, phone) {
        let result = await reqGetRegisterCode(phone);
        if (result.code == 200) {
            commit('GETREGISTERCODE', result.data);
            return 'success';
        } else {
            return Promise.reject(new Error('fail'));
        }
    },
    async register({ commit }, data) {
        let result = await reqPostRegister(data);
        if (result.code == 200) {
            return 'success';
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
    async login({ commit }, data) {
        let result = await reqPostLogin(data);
        if (result.code == 200) {
            commit('LOGIN', result.data.token);
            setToken(result.data.token);
            return 'success';
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
    async getUserInfo({commit}) {
        let result = await reqGetUserInfo();
        // console.log(result)
        if (result.code == 200) {
            commit('GETUSERINFO', result.data);
            return 'success';
        } else {
            return Promise.reject(new Error('fail'));
        }
    },
    async logout({commit}) {
        let result = await reqLogout();
        if (result.code == 200) {
            commit('LOGOUT');
            return 'success';
        } else {
            return Promise.reject(new Error(result.message));
        }
    }
}
const mutations = {
    GETREGISTERCODE(state, value) {
        state.codes = value;
    },
    LOGIN(state, value) {
        state.token = value;
    },
    GETUSERINFO(state, value) {
        state.userInfo = value;
    },
    LOGOUT(state) {
        state.token = '';
        state.userInfo = {};
        removeToken();
    }
}
const state = {
    codes: '',
    token: getToken(),
    userInfo: {},
}
const getters = {}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}