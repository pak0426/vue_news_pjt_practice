import Vuex  from 'vuex';
import {fetchAsksList, fetchJobsList, fetchNewsList} from '../api/index'

export const store =  new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: []
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ASKS(state, asks) {
            state.asks = asks;
        },
    },
    getters: {
      fetchedJobs(state) {
          return state.jobs;
      }
    },
    actions: {
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
})

export default store;