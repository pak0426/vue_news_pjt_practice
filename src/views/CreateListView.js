import ListView from './ListVue.vue'
import { h } from 'vue'


export default function createListView(name) {
    return {
        //재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name,
        created() {
            this.$store.dispatch('SET_LOADINGSTATUS', true)
                .then(() => {
                    this.$store.dispatch('FETCH_LIST', this.$route.name)
                        .then(() => {
                            setTimeout(() =>
                                this.$store.dispatch('SET_LOADINGSTATUS', false), 300
                            )
                        })
                })
        },
        render() {
            return h(ListView);
        }
    }
}