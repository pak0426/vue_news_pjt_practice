import {fetchUserInfo, fetchItemInfo, fetchList} from "@/api";

export default {
    //promise
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(({ data }) => commit('SET_LIST', data))
    //         .catch(error => console.log('error', error));
    // },
    // FETCH_USERINFO({ commit }, userName) {
    //     return fetchUserInfo(userName)
    //         .then(response => {
    //             console.log('response', response);
    //             commit('SET_USERINFO', response.data);
    //         })
    //         .catch(error => console.log('error', error))
    // },
    // FETCH_ITEMINFO({ commit }, itemId) {
    //     return fetchItemInfo(itemId)
    //         .then(response => {
    //             console.log('response', response);
    //             commit('SET_ITEMINFO', response.data);
    //         })
    //         .catch(error => {
    //             console.log('error', error);
    //         })
    // },
    SET_LOADINGSTATUS({ commit }, loadingStatus) {
        return commit('SET_LOADINGSTATUS', loadingStatus);
    },
    //async
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        console.log('async & await response', response.data);
        commit('SET_LIST', response.data);
        return response;
    },
    async FETCH_USERINFO({ commit }, userName) {
        const response = await fetchUserInfo(userName);
        console.log('async & await response', response.data);
        commit('SET_USERINFO', response.data);
        return response;
    },
    async FETCH_ITEMINFO({ commit }, itemId) {
        const response = await fetchItemInfo(itemId);
        console.log('async & await response', response.data);
        commit('SET_ITEMINFO', response.data);
        return response;
    }
}