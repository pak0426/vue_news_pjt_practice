import Vuex  from 'vuex';
import Mutations from './mutations'
import Actions from './actions'

export const store =  new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: [],
        user: {},
        item: {}
    },
    mutations: Mutations,
    getters: {
        fetchedJobs(state) {
          return state.jobs;
        },
        getInfoItem(state) {
            return state.item;
        }
    },
    actions: Actions
})

export default store;