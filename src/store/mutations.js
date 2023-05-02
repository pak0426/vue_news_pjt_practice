export default {
    SET_USERINFO(state, user) {
        state.user = user;
    },
    SET_ITEMINFO(state, item) {
        state.item = item;
    },
    SET_LOADINGSTATUS(state, loadingStatus) {
        state.loadingStatus = loadingStatus;
    },
    SET_LIST(state, list) {
        state.list = list;
    }
}