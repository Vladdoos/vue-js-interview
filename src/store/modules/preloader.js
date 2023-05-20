export default {
    state: {
        isVisiblePreloader: false
    },
    mutations: {
        onPreloader(state) {
            state.isVisiblePreloader = true;
        },
        offPreloader(state) {
            state.isVisiblePreloader = false;
        },
    },
    getters: {
        getVisiblePreloader (state) {
            return state.isVisiblePreloader
        },
    }

}
