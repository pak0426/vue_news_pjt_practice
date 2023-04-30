import Vuex  from 'vuex';
import Mutations from './mutations'
import Actions from './actions'

export const store =  new Vuex.Store({
    state: {
        news: [],
        asks: [],
        jobs: [],
        user: {},
        item: {},
        loadingStatus: false
    },
    mutations: Mutations,
    getters: {
        fetchedJobs(state) {
          return state.jobs;
        },
        getInfoItem(state) {
            return state.item;
        },
        getLoadingStatus(state) {
            return state.loadingStatus;
        }
    },
    actions: Actions
})

export default store;