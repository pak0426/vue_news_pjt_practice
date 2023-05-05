export default {
    // 재사용할 컴포넌트 옵션
    created() {
        this.$store.dispatch('SET_LOADINGSTATUS', true)
            .then(() => {
                console.log('fetch');
                this.$store.dispatch('FETCH_LIST', this.$route.name)
                    .then(() => {
                        setTimeout(() =>
                            this.$store.dispatch('SET_LOADINGSTATUS', false), 300
                        )
                    })
            })
    }
}

