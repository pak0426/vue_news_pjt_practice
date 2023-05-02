import Vuex  from 'vuex';
import Mutations from './mutations'
import Actions from './actions'

export const store =  new Vuex.Store({
    state: {
        user: {},
        item: {},
        loadingStatus: false,
        list: []
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