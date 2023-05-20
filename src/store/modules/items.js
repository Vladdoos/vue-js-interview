export default {
    state: {
        items: [
            'russia',
            'usa',
            '> 20',
            '< 10',
        ],
        variant: 'default',
        country: null,
        score: null,
    },
    getters: {
        getItems(state) {
            return state.items
        },
        getVariants (state) {
            return state.variant
        },
        getCountry(state) {
            return state.country
        },
        getScore(state) {
            return state.score
        }
    },
    mutations: {
        updateVariant (state, variant) {
            state.variant = variant
        },
        updateCountry(state, data) {
            state.country = data;
        },
        updateScore(state, data) {
            state.score = data;
        },
    }
}
