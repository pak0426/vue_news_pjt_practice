import {fetchUserInfo, fetchItemInfo, fetchList} from "@/api";

export default {
    FETCH_USERINFO({ commit }, userName) {
        return fetchUserInfo(userName)
            .then(response => {
                console.log('response', response);
                commit('SET_USERINFO', response.data);
            })
            .catch(error => console.log('error', error))
    },
    FETCH_ITEMINFO({ commit }, itemId) {
        return fetchItemInfo(itemId)
            .then(response => {
                console.log('response', response);
                commit('SET_ITEMINFO', response.data);
            })
            .catch(error => {
                console.log('error', error);
            })
    },
    SET_LOADINGSTATUS({ commit }, loadingStatus) {
        return commit('SET_LOADINGSTATUS', loadingStatus);
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(({ data }) => commit('SET_LIST', data))
            .catch(error => console.log('error', error));
    }
}