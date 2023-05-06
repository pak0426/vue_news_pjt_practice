export default {
    mounted() {
        setTimeout(() => this.$store.dispatch('SET_LOADINGSTATUS', false), 300)
    }
}