import {fetchAsksList, fetchJobsList, fetchNewsList} from "@/api";

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log('news response', response);
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => {
                console.log('error', error);
            });
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(response => {
                console.log('jobs response', response);
                commit('SET_JOBS', response.data);
            })
            .catch(error => {
                console.log('error', error);
            })
    },
    FETCH_ASKS({ commit }) {
        fetchAsksList()
            .then(response => {
                console.log('asks response', response);
                commit('SET_ASKS', response.data);
            })
            .catch(error => {
                console.log('error', error);
            })
    }
}